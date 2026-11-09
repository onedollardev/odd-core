(() => {
  const slug = "responsive-image-with-aspect-ratio";
  const version = "1.0.1";
  const contractVersion = "1.0.0";
  const mounted = new WeakMap();

  function init(root) {
    if (!root || root.dataset.oddComponent !== slug) {
      throw new Error(`Expected ${slug} root`);
    }
    if (mounted.has(root)) return mounted.get(root);

    const image = root.querySelector('[data-odd-part="image"]');
    const fallback = root.querySelector('[data-odd-part="fallback"]');
    const aspectControls = [...root.querySelectorAll('[data-odd-field="aspect-ratio"]')];
    const fitControls = [...root.querySelectorAll('[data-odd-field="object-fit"]')];
    if (!image || !fallback || !aspectControls.length || !fitControls.length) {
      throw new Error(`${slug} root is missing required image or option controls`);
    }

    const controller = new AbortController();
    const options = { signal: controller.signal };
    const instanceId = globalThis.crypto?.randomUUID?.()
      || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    const name = root.dataset.oddName || slug;
    let imageAvailable = null;
    const on = (element, type, listener) => element.addEventListener(type, listener, options);
    const selected = (controls) => controls.find((control) => control.checked)?.value;
    const currentValue = () => ({
      aspectRatio: selected(aspectControls),
      objectFit: selected(fitControls),
      available: imageAvailable
    });
    const emit = (source) => root.dispatchEvent(new CustomEvent("odd:change", {
      bubbles: true,
      detail: {
        component: slug,
        version,
        contractVersion,
        instanceId,
        value: currentValue(),
        source
      }
    }));
    const status = root.querySelector('[data-odd-part="status"]');
    const announce = () => {
      if (status) {
        const value = currentValue();
        status.textContent = `Aspect ratio ${value.aspectRatio}; image fit ${value.objectFit}.`;
      }
    };
    const syncOptions = () => {
      const value = currentValue();
      root.dataset.aspectRatio = value.aspectRatio;
      root.dataset.objectFit = value.objectFit;
      announce();
    };
    const applyOptions = (source) => {
      syncOptions();
      emit(source);
    };
    const setImageAvailable = (available) => {
      if (imageAvailable === available) return;
      imageAvailable = available;
      image.hidden = !available;
      fallback.hidden = available;
      emit(available ? "image-load" : "image-error");
    };

    aspectControls.forEach((control) => {
      control.name = `${name}-aspect-${instanceId}`;
      on(control, "change", () => applyOptions("user"));
    });
    fitControls.forEach((control) => {
      control.name = `${name}-fit-${instanceId}`;
      on(control, "change", () => applyOptions("user"));
    });
    on(image, "load", () => setImageAvailable(true));
    on(image, "error", () => setImageAvailable(false));

    const form = root.closest("form");
    if (form) {
      on(form, "reset", () => {
        setTimeout(() => {
          if (!controller.signal.aborted) applyOptions("reset");
        }, 0);
      });
    }

    const api = {
      destroy() {
        controller.abort();
        mounted.delete(root);
      }
    };
    mounted.set(root, api);
    root.dispatchEvent(new CustomEvent("odd:ready", {
      bubbles: true,
      detail: { component: slug, version, contractVersion, instanceId }
    }));
    syncOptions();
    if (image.complete) setImageAvailable(image.naturalWidth > 0);
    return api;
  }

  window.ODDCore = window.ODDCore || {};
  window.ODDCore[slug] = { init };
  document.querySelectorAll(`[data-odd-component="${slug}"]`).forEach(init);
})();

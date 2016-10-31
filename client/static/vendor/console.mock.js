(function (window) {
  let originalConsole = window.console;
  let console = {};
  Object.keys(window.console).forEach(key => {
    console[key] = function () {
      window.parent.postMessage({
        funName: key,
        data: [...arguments]
      }, '*');
      originalConsole[key].call(this, ...arguments);
    };
  });

  window.addEventListener('error', function (e) {
    originalConsole.error(e);
    console.error(e.message);
  }, false);

  window.console = console;
})(window);
(function (window) {
  var originalConsole = window.console;
  var console = {};
  Object.keys(window.console).forEach(function (key) {
    console[key] = function () {
      let args = [].slice.call(arguments, 0);
      window.parent.postMessage({
        funName: key,
        data: args
      }, '*');
      originalConsole[key].apply(this, args);
    };
  });

  window.addEventListener('error', function (e) {
    originalConsole.error(e);
    console.error(e.message);
  }, false);

  window.console = console;
})(window);
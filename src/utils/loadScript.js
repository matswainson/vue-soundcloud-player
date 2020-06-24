const loadScript = (url, callback) => {
  const scripts = [].slice.call(document.getElementsByTagName('script')).filter(script => script.src === url);
  if (scripts.length) {
    if (callback) {
      window.setTimeout(callback, 2000);
    }
    return;
  }
  let script = document.createElement('script');
  if (script.readyState) {  // IE<9
    script.onreadystatechange = function() {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function() {
      callback();
    };
  }
  script.type = 'text/javascript';
  script.src = url;
  document.getElementsByTagName('body')[0].appendChild(script);
};

export default loadScript;
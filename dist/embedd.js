function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0) {
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
  }
  return false;
}

if (msieversion() !== 9) {
  window.XSSSearchCRUK = {};

  function iterateBodyChildren (hiddenClass, remove) {
    [].slice.call(document.body.childNodes).forEach(function(node){
      if (node.id !== "cruk-xss-search-wrapper" && typeof node.className !== "undefined") {
        if (remove) {
          node.className = (node.className.indexOf(hiddenClass) !== -1) ? node.className.replace(hiddenClass, "") : node.className;
        } else {
          node.className += (node.className.indexOf(hiddenClass) === -1) ? ' ' + hiddenClass : '';
        }
      }
    });
  }

  window.XSSSearchCRUK.wrapAll = function() {
    iterateBodyChildren("xss-hidden", false);
  }

  window.XSSSearchCRUK.unwrapAll = function() {
    iterateBodyChildren("xss-hidden", true);
  }

  // Append CRUK XSS search wrapper
  var searchWrapper = document.createElement('div');
  searchWrapper.id = "cruk-xss-search-wrapper";
  document.body.appendChild(searchWrapper);


  (function() {
    // Add css
    var head = document.head
      , link = document.createElement('link')

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'http://cruk-search-demo.s3-website-eu-west-1.amazonaws.com/styles.css';
    head.appendChild(link);

    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    var theUrl = 'http://cruk-search-demo.s3-website-eu-west-1.amazonaws.com/bundle.js';
    s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
    var embedder = document.body;
    embedder.appendChild(s);
  })();
}
var elements = document.getElementsByClassName('cruk-search-widget');

for (var i = 0; i < elements.length; i++) {
  if (msieversion() !== 9) {
    elements[i].addEventListener("click", function(e) {
        window.XSSSearchCRUK.wrapAll(true);
        window.XSSSearchCRUK.activate(true);
    }, false);
  } else {
    console.log(elements[i].parentNode);
    var form = document.createElement("form");
    var inputText = document.createElement("input");
    var inputSubmit = document.createElement("input");

    form.action = "https://www.google.co.uk/search?as_sitesearch=cancerresearchuk.org";
    form.method = "get";
    form.target = "_blank";

    inputText.type = "text";
    inputText.name = "as_q";

    inputSubmit.type = "submit";
    inputSubmit.value = "Submit";

    form.appendChild(inputText);
    form.appendChild(inputSubmit);

    elements[i].parentNode.replaceChild(form, elements[i]);
  }
}

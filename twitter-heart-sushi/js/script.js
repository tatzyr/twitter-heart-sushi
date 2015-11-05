function addCSSRule(selector, css) {
  var sheets = document.styleSheets;
  var sheet = sheets[sheets.length - 1];

  if (sheet.insertRule) {
    sheet.insertRule(selector + '{' + css + '}', sheet.cssRules.length);
  } else if (sheet.addRule) {
    sheet.addRule(selector, css, -1);
  }
}

$(function() {
  addCSSRule('.HeartAnimation', 'background: none !important;');
  addCSSRule('.HeartAnimationContainer:after', 'content: "🍣";');
});

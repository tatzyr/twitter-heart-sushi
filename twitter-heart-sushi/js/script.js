function addCSSRule(selector, css) {
  var sheets = document.styleSheets,
  sheet = sheets[sheets.length - 1];

  if (sheet.insertRule) {
    sheet.insertRule(selector + '{' +  css + '}', sheet.cssRules.length);
  } else if (sheet.addRule) {
    sheet.addRule(selector, css, -1);
  }
}

$(function(){
  addCSSRule('.HeartAnimation', 'background: none !important;');
  addCSSRule('.HeartAnimation', 'top: 6px; left: -12px;');
  addCSSRule('.HeartAnimation:after', 'content: "🍣";');
});

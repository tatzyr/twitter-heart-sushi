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
  // #LoveTwitter
  if ($(".HeartAnimation--birthday").length === 0) {
    // Like Button
    addCSSRule('.HeartAnimationContainer', 'overflow: visible;');
    addCSSRule('.HeartAnimation', 'background: url("chrome-extension://mjpkliiekogffkgegdgendlnbjllncem/img/sushi_nonanimation.png"); background-repeat: no-repeat; background-size: 2900%;');
  }

  // Notifications
  addCSSRule('span.Icon.Icon--heartBadge', 'visibility: hidden;')
  addCSSRule('span.Icon.Icon--heartBadge:before', 'margin: 0 0 0 -1px; content: " "; display: inline-block; width: 16px; height: 16px; background: url("chrome-extension://mjpkliiekogffkgegdgendlnbjllncem/img/sushi_notification.png"); background-size: contain; vertical-align: middle; visibility: visible;')
});

// Copy Styles
function copyVal() {
  /* Get the text field */
  var copyText = document.getElementById("css-output").innerHTML;

  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  document.getElementById('copy-confirm').style.opacity = 1;
  setTimeout(function() {
      document.getElementById('copy-confirm').style.opacity = 0;
  },1000);
}
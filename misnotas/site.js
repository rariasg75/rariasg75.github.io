// Copy button for the support address; its labels come from the page's language.
(function () {
  var button = document.getElementById('copy-email');
  var email = document.getElementById('email');
  var idle = button.textContent;
  button.addEventListener('click', function () {
    var text = email.textContent.trim();
    function selectIt() {
      var range = document.createRange();
      range.selectNodeContents(email);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      button.textContent = button.dataset.selected;
    }
    try {
      navigator.clipboard.writeText(text).then(function () {
        button.textContent = button.dataset.copied;
      }, selectIt);
    } catch (e) {
      selectIt();
    }
    setTimeout(function () { button.textContent = idle; }, 2000);
  });
})();

Haack.ready(function() {
  document.querySelectorAll('div[contenteditable].plaintext').forEach(function(editor) {
    // Set up the content editable div
    try {
        editor.contentEditable="PLAINTEXT-ONLY";
    } catch(e) {
        // Firefox hack to prevent rich text from being pasted.
        editor.contentEditable="true"
        editor.addEventListener("paste", function(e) {
          e.preventDefault();
          if (e.clipboardData && e.clipboardData.getData) {
            var text = e.clipboardData.getData("text/plain").replace(/(?:\r\n|\r|\n)/g, '<br />')
            document.execCommand("insertHTML", false, text)
          } else if (window.clipboardData && window.clipboardData.getData) {
            var text = window.clipboardData.getData("Text")
            insertTextAtCursor(text)
          }
        })
    }

    var targetHiddenInput = Haack.get(editor.dataset.target)
    if (targetHiddenInput) {
      editor.oninput = (e) => {
        targetHiddenInput.value = e.target.innerText
      }
    }
  })
})

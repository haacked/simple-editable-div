# Simple Editable Div

This is a simple approach to building a Content Editable Div that works in Chrome, Firefox, and Edge.

When `editable-div.js` loads and is ready, it sets all DIV elements with `contenteditable` and a CSS class of `plaintext` to `contenteditable="PLAINTEXT-ONLY"` for browsers that support that value. For other browsers (such as Firefox), it overrides the `paste` event to strip any rich formatting so that the element behaves as if it were a plaintext only element.

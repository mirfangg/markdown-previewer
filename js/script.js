function updatePreview() {
    let previewElemet = document.querySelector("#preview");
    let editorValue = document.querySelector("#editor").value;
    let markedUpHTML = marked(editorValue);

    previewElemet.innerHTML = markedUpHTML;
}

function setDefault() {
    let defaultText = `
# Markdown Previewer

## This is a sub-heading...
### And here's some other cool stuff:

[Learn more about freeCodeCamp.org](https://www.freecodecamp.com)
<dl>
    <dt>Definition List</dt>
    <dd>Is something people use sometimes...</dd>
</dl>

\`Thank you for your time to look at this\`

\`\`\`
function exampleOf() {
    return multiLineCodeBlock;
}
\`\`\`

- Code
- All
- Time

> Learn to be a success self-taught developer

![Jatibeningg](https://i.pinimg.com/564x/6f/10/12/6f10123c9d8ec09cd50a10ab93dd222b.jpg)

**Bolded Text**
    `;

    let editorField = document.querySelector("#editor");
    let previewElement = document.querySelector("#preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked(defaultText);
}
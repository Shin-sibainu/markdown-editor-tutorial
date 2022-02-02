var simplemde = new SimpleMDE({
  element: document.getElementById("editor"),
  forceSync: true,
  spellChecker: true,
});
// console.log(simplemde);

const markdown = document.getElementById("editor");

function draw_preview() {
  const markdown_value = markdown.value;
  const html = SimpleMDE.prototype.markdown(simplemde.value());
  document.getElementById("preview").innerHTML = html;
  document.getElementById("html-preview").innerText = html;
  console.log(html);
}

document.addEventListener("input", () => {
  //   console.log("a");
  draw_preview();
});

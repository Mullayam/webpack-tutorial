class root {
  render(component) {
    const body = document.querySelector("body");
    body.appendChild(component);
  }
}
module.exports = new root;

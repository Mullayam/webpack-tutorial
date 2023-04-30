import "./btn.css"
class Button {
    
  render() {
    console.log(
        "renderButton 2"
    );
    const button = document.createElement("button");
    button.setAttribute("class","btn btn-primary");
    button.onclick = () => {
      const p = document.createElement("p");
      p.classList.add("text-primary");
      p.innerHTML = "Walaaha habibi";
      body.appendChild(p);
    };
    button.innerHTML = "Click on me";
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}
export default Button
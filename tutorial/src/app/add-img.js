import DemoImg from "./demo.jpg";
function addImg() {
    const img = document.createElement('img');
    img.src = DemoImg;
    img.alt ="demo";
    img.width =300 ;
    const body = document.querySelector('body');
    body.appendChild(img);
    
}
export default addImg
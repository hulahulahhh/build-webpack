import "./style/search.css";
import { a, b } from './tree-shaking'

function component() {
  var element = document.createElement("div");

  element.innerHTML = "hello webpack world new";
  element.classList.add("hello");
  element.onclick = () => {
    import("./print").then(()=>{
      console.log('hi print');
    })
  };

  a()

  // throw new Error("source map 你能找到我吗");

  return element;
}

document.body.appendChild(component());

import "./asserts/03.css";
import style from "./asserts/03-1.css?inline";

console.log(style);

const stleEl = document.createElement("style");

stleEl.innerText = style;

document.querySelector("head").append(stleEl);

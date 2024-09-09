import "./asserts/03.css";
import stylesA from "./asserts/04a.module.css";
import { heading as HeadingColor } from "./asserts/04b.module.css";

console.log(stylesA);
// console.log(stylesB);

document.querySelector(
    ".heading"
).className = `${stylesA.heading} ${HeadingColor}`;

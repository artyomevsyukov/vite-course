import "./assets/03.css";
// import stylesA from "./assets/04a.module.css";
// import stylesB from "./assets/04b.module.css";
// console.log(stylesA);
// console.log(stylesB);
// document.querySelector(".heading").classList.add(stylesA.heading);
// document.querySelector(".heading").classList.add(stylesB.heading);

// document.querySelector(
//     ".heading"
// ).className = `${stylesA.heading} ${stylesB.heading} `;
// document.querySelector(
//     ".heading"
// ).className = `${stylesA.heading} ${HeadingColor}`;

import { heading as HeadingColor } from "./assets/04a.module.css";
import { heading as HeadingFontSize } from "./assets/04b.module.css";

document.querySelector(
    ".heading"
).className = `${HeadingColor} ${HeadingFontSize}`;

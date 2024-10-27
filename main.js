// import "./src/assets/global.scss";
// import "./src/02.js"; // import npm module
// import "./src/03.js"; // import css
// import "./src/04.js"; // import css module
// import styleA from "./assets/04a.module.css";
// import styleB from "./assets/04b.module.css";
// import "./src/05.js"; //tailwindcss
// import "./src/06.js"; // SCSS
// import "./src/07.js"; // JSON
import { data } from "autoprefixer";
import "./src/08.js"; // img svg
const modules = import.meta.glob("./src/10/*.js");
console.log(modules);

document.addEventListener("click", () => {
    Object.values(modules).forEach((module) => {
        module().then((data) => {
            console.log(data);
        });
    });
});

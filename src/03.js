import "./assets/03.css";
import styles from "./assets/03-1.css?inline"; // Не надо применять стилои автаматически на странице, а вернуть их в качестве стандартного экспорта из этого модуля. Вернется строка стилей в переменную styles

console.log(styles);

const stleEl = document.createElement("style");

stleEl.innerText = styles;

document.querySelector("head").append(stleEl);

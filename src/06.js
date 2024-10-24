// import "./asserts/06.scss";
import styles from "./asserts/06.module.scss";
console.log(styles);

document.body.className = `${styles.wrapper} ${styles.heading} ${styles.title}`;
// document.querySelector(
//     ".h1"
// ).className = `${styles.wrapper} ${styles.heading} ${styles.title}`;
// document.querySelector(
//     ".wrapper"
// ).className = `${styles.wrapper} ${styles.heading}`;
// document.querySelector(".wrapper__heading").className = styles.wrapper;

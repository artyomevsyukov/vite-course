import debounce from "lodash/debounce";

const handleResize = debounce(() => {
    console.log("Window resized");
}, 300);

window.addEventListener("resize", handleResize);

import imageUrl from "./assets/img/javascript.svg";
console.log(imageUrl);
document.getElementById("img").src = imageUrl;

import imageUrl2 from "./assets/img/javascript.svg?raw";
console.log(imageUrl2); // Вернет контент в виде строки

import url from "./07.json?url"; //Вернет url
console.log(url);

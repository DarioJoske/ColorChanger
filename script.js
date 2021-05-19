const hexNum = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const background = document.querySelector('body');
const button = document.querySelector('.button');
const hexText = document.querySelector('.hex-text');


button.addEventListener('click', getHex);

function getHex(){

let hexColor='#'


for(let i=0; i<6; i++){
let random = Math.floor(Math.random()*hexNum.length);
console.log(random);
hexColor +=hexNum[random];
console.log(hexColor);
}


background.style.backgroundColor = hexColor;
hexText.innerHTML=hexColor;
}
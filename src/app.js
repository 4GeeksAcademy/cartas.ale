import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const btn = document.querySelector("button");
  btn.addEventListener('click', render);
  render();
};

function render () {
const value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const palos = ['♦', '♥', '♠', '♣'];

const randomValue = pick(value);
const randomPalos = pick(palos);

document.getElementById("top").textContent = randomPalos;
document.getElementById("value").textContent = randomValue;
document.getElementById("bottom").textContent = randomPalos;

const rojo = randomPalos == '♦' || randomPalos == '♥';
document.getElementById("top").style.color = rojo ? "red" : "black";
document.getElementById("bottom").style.color = rojo ? "red" : "black";
}


function pick(arr) {
 return arr[Math.floor(Math.random() * arr.length)];
}




console.log("running");

let ibis = document.querySelector(".row-2b");
let p1 = document.querySelector(".row-1a");
let p2 = document.querySelector(".row-1b");
let p3 = document.querySelector(".row-1c");
let p4 = document.querySelector(".row-2a");
let p5 = document.querySelector(".row-2b");
let p6 = document.querySelector(".row-2c");
let p7 = document.querySelector(".row-3a");
let p8 = document.querySelector(".row-3b");
let p9 = document.querySelector(".row-3c");

//console.log(conta.innerHTML);

const pictures = [
  {
    name: "Denis",
    pic: "../img/denis.jpeg"
  },
  {
    name: "Jonathan",
    pic: "../img/jonathan.jpeg"
  },
  {
    name: "Rashrafi",
    pic: "../img/rashrafi.jpg"
  },
  {
    name: "Zakia",
    pic: "../img/zakia.jpg"
  },
  {
    name: "Abi",
    pic: "../img/abi.jpeg"
  },
  {
    name: "Brian",
    pic: "../img/brian.jpg"
  },
  {
    name: "Julio",
    pic: "../img/julio.jpg"
  }
];

let len = pictures.length;
let i = 0;

let grade = 0;

let m = setInterval(() => {
  grade++;

  i++;
  if (i === len) {
    i = 0;
  }

  p1.style.backgroundImage = `url('${pictures[i].pic}'`;
  p2.style.backgroundImage = `url('${pictures[i + 1].pic}'`;
  p3.style.backgroundImage = `url('${pictures[i + 2].pic}'`;
  p4.style.backgroundImage = `url('${pictures[i + 3].pic}'`;
  //p5.style.backgroundImage = `url('${pictures[i + 4].pic}'`;
  p6.style.backgroundImage = `url('${pictures[i + 4].pic}'`;
  p7.style.backgroundImage = `url('${pictures[i + 2].pic}'`;
  p8.style.backgroundImage = `url('${pictures[i + 1].pic}'`;
  p9.style.backgroundImage = `url('${pictures[i].pic}'`;

  if (grade > 360) {
    grade = 0;
  }
  ibis.style.transform = `rotate(${grade}deg)`;
  p1.style.transform = `rotateX(${grade}deg)`;
  p3.style.transform = `rotateY(${grade}deg)`;
  p9.style.transform = `rotateZ(${grade}deg)`;
  console.log("grade" + grade);
}, 1000);

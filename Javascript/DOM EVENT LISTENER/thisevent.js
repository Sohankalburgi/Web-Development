const btnlist = document.querySelectorAll("button");

function randomcolor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}

for(let i of btnlist){
    i.addEventListener('click',colorize);
}

const h1s = document.querySelectorAll("h1");

for(let i of h1s){
    i.addEventListener('click',colorize);
}

function colorize(){
    this.style.backgroundColor = randomcolor();
}
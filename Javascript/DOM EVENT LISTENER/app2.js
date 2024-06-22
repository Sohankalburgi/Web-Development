
document.querySelector('button').addEventListener('click',function(){
    const r = randomgeneration();
    const g = randomgeneration();
    const b = randomgeneration();
    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    document.querySelector('h1').innerText = newColor;
})

function randomgeneration(){
    return Math.floor(Math.random()*255);
}
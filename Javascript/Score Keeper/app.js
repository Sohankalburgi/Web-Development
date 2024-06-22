const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const p1score = document.querySelector("#p1score");
const p2score = document.querySelector("#p2score");
const reset = document.querySelector("#Reset");

let winningscore = document.querySelector("#winningscore");
let isGameOver = false;

p1button.addEventListener('click',function (){
    if(!isGameOver){
    p1score.innerText = parseInt(p1score.innerText)+1;
        if(parseInt(p1score.innerText)===winningscore){
            isGameOver=true;
            p1score.classList.toggle("winner");
            p2score.classList.toggle("loser");
            p1button.disabled = true;
            p2button.disabled = true;
        }
    }
    
});

p2button.addEventListener('click',function()
{
    if(!isGameOver){
        p2score.innerText = parseInt(p2score.innerText)+1;
        if(parseInt(p2score.innerText)===winningscore){
            isGameOver=true;
            p1score.classList.toggle("loser");
            p2score.classList.toggle("winner");
            p1button.disabled = true;
            p2button.disabled = true;
        }
    }
})

function resetbutton(){
    p1button.disabled = false;
    p2button.disabled = false;
    p1score.classList.remove('winner');
    p1score.classList.remove('loser');
    p2score.classList.remove('winner');
    p2score.classList.remove('loser');
    p1score.innerText = 0;
    p2score.innerText = 0;
    isGameOver = false;
}

winningscore.addEventListener('change',function (){
    winningscore = parseInt(this.value);
    resetbutton();
})
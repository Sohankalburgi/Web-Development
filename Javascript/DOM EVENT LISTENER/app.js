const btn = document.querySelector("#v2");

btn.onclick = ()=>console.log("YOU click the selector selected button ");

function scream(){
    console.log("YAHHHHHHHHHHHH!");
    console.log("Hello are you there ?");
}

btn.onmouseenter = scream;

// the above are the clumsy methods 

const btn3 = document.querySelector("#v3");
// addEventListener('event',callback);
btn3.addEventListener('click',()=>alert("this is from event listener"));

const tstbn = document.querySelector("#testbtn");

tstbn.addEventListener('click',()=>console.log('twist'),{once:true});
tstbn.addEventListener('click',()=>console.log('shout'));


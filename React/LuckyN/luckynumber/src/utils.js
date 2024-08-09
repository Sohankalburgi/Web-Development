export  function randomd6(){
    return Math.floor(Math.random()*6)+1;
}

export  function makerandom(n){
    const arr = [];
    for(let i=0;i<n;i++){
        arr.push(randomd6());
    }

    return arr;
}


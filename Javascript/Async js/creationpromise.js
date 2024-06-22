// creating the promise for handling 
const fakeRequest = (url) =>{
    return new Promise( (resolve,reject) =>{
        const rand = Math.random()
        
        setTimeout(()=>
        {
            if(rand<0.7){
            resolve('This is resolved');
            }
            reject('the rejection ');
        },1000)
    })
}

fakeRequest('hello/1')
    .then(()=>{
        console.log("Done with Request !!");
    })
    .catch((rej)=>
    console.log("the error "+rej));

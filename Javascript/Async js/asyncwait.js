
// This is using Promise return 
const delayedColorChange = (color,delay) =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

// delayedColorChange("red",1000)
//     .then(()=>delayedColorChange("yellow",1000))
//     .then(()=>delayedColorChange("green",1000))
//     .then(()=>delayedColorChange("orange",1000))

//This is using async function and wait
async function rainbow(){
    await delayedColorChange("red",1000)
    await delayedColorChange("orange",1000)
    await delayedColorChange("pink",1000)
    await delayedColorChange("black",1000)
    await delayedColorChange("purple",1000)
}
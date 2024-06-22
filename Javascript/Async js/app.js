// setInterval(function (){
//     document.body.style.backgroundColor='red'; 
//     document.querySelector('h1').innerText="Pragathi is";
//     setInterval(function (){
//         document.body.style.backgroundColor='orange'; 
//         document.querySelector('h1').innerText="Pagal";
//         setInterval(function (){
//             document.body.style.backgroundColor='yellow'; 
//             document.querySelector('h1').innerText="pajethi";
//             setInterval(function (){
//                 document.body.style.backgroundColor='lightgreen'; 
//                 document.querySelector('h1').innerText="bajari";
//                 setInterval(function (){
//                     document.body.style.backgroundColor='crimson'; 
//                     document.querySelector('h1').innerText="donkey";
//                 },1000);    
//             },1000);
//         },1000);
//     },1000);
// },1000);


// const delayedColorChange = function (newColor,delay,doNext){
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay);
// }


// delayedColorChange('red',1000,()=>delayedColorChange('yellow',1000,
// ()=>delayedColorChange("green",1000,)))

const delayedColorChange = (color,delay) =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

delayedColorChange('red',1000)
    .then(()=>{
       return delayedColorChange('orange',1000);
    })
    .then(()=>{
       return  delayedColorChange('yellow',1000);
    })
    .then(()=>{
       return  delayedColorChange('green',1000);
    })
    .then(()=>{
      return   delayedColorChange('blue',1000);
    })

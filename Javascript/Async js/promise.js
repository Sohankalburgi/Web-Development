// const fakeRequestCallback = (url,success,failure) => {
//     const delay = Math.floor(Math.random*4500)+500;
//     setTimeout(()=>{
//         if(delay>4000){
//             failure("Connection Timeout :(");
//         }
//         else{
//             success(`Here is the fake data in the ${url}`);
//         }
//     },delay)

// }


// fakeRequestCallback("sohan.com",function(response){
//     console.log("It worked!!!")
//     console.log(response)
// },function(errresponse){
//     console.log("Not Worked !!!")
//     console.log(errresponse);
// })

fakeRequestPromise('hello/api/world.com')
    .then(()=>{
        console.log("it worked !!! (page 1)")
        return fakeRequestPromise('hello/api/world.com')
    })
    .then(()=>{
        console.log("it worked !!! (page 2)")
        return fakeRequestPromise('hello/api/world/page2')
    })
    .then(()=>{
        console.log("it worked !!! (page 3)")
        return fakeRequestPromise('hello/api/world/page3')
    })
    .catch(()=>{
        console.log("OH no, REQuest failed");
    })
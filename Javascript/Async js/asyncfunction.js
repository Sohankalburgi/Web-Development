// async function hello(){

// }

// When ever there is return then it is resolved by the Return LALALA
const sing =  async function(){
    throw new Error("OH OH NO !!")
    return "LA LAL AL"
}

sing().
    then((data)=>{
    console.log("It is resolved with :"+data )
    })
    .catch((err)=>{
        console.log("It is error"+err)
    })


const login = async function (username,password){
    if(username==='' || password===''){
        throw new ("Bad Credentials")
    }
    if(password==='sohan'){
        return "Welcome"
    }
    else{
        throw "invalid Password"
    }
}

// this is to give the then part    
login("sohan","sohan").
    then((response)=>{
        console.log("The success "+response)
    })
    .catch(err=>console.log("The failure "+err))

    //this is to give the catch part
login("sohan","13456").
    then((response)=>{
        console.log("The success "+response)
    })
    .catch(err=>console.log("The failure "+err))
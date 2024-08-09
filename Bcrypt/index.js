const bcrypt = require('bcrypt')

const hashPassword = async(pw) =>{
    try{
    const genSalt = await bcrypt.genSalt(10);
    // console.log(genSalt)
    const bcryptPass = await bcrypt.hash(pw,genSalt);
    console.log(bcryptPass)
    return bcryptPass;
    }
    catch(err){
        console.log(err)
    }
}
hashPassword('monkey');
const login = async (pw,hashedPw)=>{
    const result = await bcrypt.compare(pw,hashedPw);
    if(result){
       
        console.log('successful login')
    }else{
        console.log('password incorrect')
        
    }
}
 login('mokey','$2b$10$1Cfy3KYuRM2S1v6ZUl7EsOtwpvB88gCZMBJRktqyzCkSHcQL9W.BG')

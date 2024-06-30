import { franc } from "franc";
import langs from 'langs';

const input = process.argv[2];
const langCode = franc(input);

if(langCode==='und'){
    console.log('unknown');
}
else{
    console.log(langCode);
    const language = langs.where("3",langCode);
    console.log(language);
    if(language){
        console.log(language.name)
    }
    else{
        console.log("Can't find the language"+langCode);
    }
}

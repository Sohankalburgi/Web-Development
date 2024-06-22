const cat = {
    name:"Blue steele",
    color:"grey",
    breed:"Scottish fold",
    meow(){
        console.log(`this is ${this}`);
        console.log(`${this.name} says Meow Meow`);
    }
}

const cat2 = cat.meow;

// Using normal methods in the objects
const person={
    firstName:"Sohan",
    LastName :"Kalburgi",
    fullName : function (){
        return `${this.firstName} ${this.LastName}`
    }
}

// this shows "this" keyword is not in scope with the arrow functions
// this shows "this" refers to the window in the fullName console.log(this);
const person1 ={
    firstName : "Naruto",
    LastName  : "Uzumaki",
    fullName :()=>{
        console.log(this);
        return `${this.firstName} ${this.LastName}`;
    }

}


// compare below and next to below code 
const person2 ={
    firstName :"Saskuke",
    LastName:"Uchiha",
    fullName :()=>{
        console.log(this);
        return `${this.firstName} ${this.LastName}`;
    },
    shoutName:function(){
        setTimeout(function(){
            console.log(this);
            return `${this.firstName} ${this.LastName}`;
        },3000)
    }
}

const person3 ={
        firstName:"Skikamaru",
        LastName :"Nara",
        fullName:()=>{
            console.log(this);
            return `${this.firstName} ${this.LastName}`;
        },
        shoutName:function(){
            setTimeout(()=>{
                console.log(this);
                return `${this.firstName} ${this.LastName}`;
            },3000)
        }
}
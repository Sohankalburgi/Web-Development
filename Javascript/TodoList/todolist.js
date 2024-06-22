const todolist = [];

let prom = prompt("Enter the Command 'new','list','delete','quit'").trim().toLowerCase();
while(prom!="quit")
{
    
    if(prom=="new")
    {
        let todo = prompt("Enter the Todo task").trim().toLowerCase();
        todolist.push(todo);
    }
    else if(prom=="list")
    {
        console.log("**********");
        for(let i=0;i<todolist.length;i++)
        {   
            console.log(`${i}: ${todolist[i]}`)
        }
        console.log("**********");
    }
    else if(prom=="delete"){
        let del = prompt("Enter the index of the todolist to delete");
        if(Number.isNaN(del))
        {
            todolist.splice(del,1);
        }
        else{
            console.log("Unknown Index");
        }
    }
    else{
        console.log("Enter the valid command");
    }
    prom = prompt("Enter the Command 'new','list','delete','quit'").trim().toLowerCase();
}
console.log("the application is quitted");
let todo =[];

let req = prompt("what you want to do");

while(true){
    if(req=="quit"){
        console.log("quiting the app");
        break;
    }
    if(req=="list"){
        console.log("-------------------");
        // for(task of todo){
        //     console.log(task);
        // }
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------------");
    }else if(req=="add"){
        let task = prompt("what you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx = prompt("what you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        todo.slice(1);
        console.log("wrong request");
    }
    req = prompt("what you want to do");
}
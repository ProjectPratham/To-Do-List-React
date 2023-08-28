import React,{useState} from 'react';

function ToDoItem(props){
    /*
    const [isDone,updateIsDone]=useState(false)
    function HandleClick(){
        console.log("delete");
        if(isDone===true)
        updateIsDone(false);
        else
        updateIsDone(true);
    }*/
    return (<div onClick={()=>props.delete(props.id)} >
        <li >{props.item}</li>
        </div>);
}

export default ToDoItem;
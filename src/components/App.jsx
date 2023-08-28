import React,{useState} from "react";
import ToDoItem  from "./ToDoItem";
import InputArea from './inputArea';

function App() {
  const [list,updateList]=useState([]);
  
  
 
  
  function handleDelete(id){
    
    updateList(prevItems=>{
      return prevItems.filter((item,index)=>{
        return index!==id;
      });
    })
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <InputArea 
        list={list}
        updateList={updateList}/>
      </div>
      <div>
        <ul>
        {list.map((event,index)=>(
         <ToDoItem 
         item={event}
         delete={handleDelete}
         id={index}/>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

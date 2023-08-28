import React,{useState} from 'react';

function InputArea(props){
    const [item,updateItem]=useState("");
    function handleChange(event){
        const newItem=event.target.value;
        updateItem(newItem);
      };
      function handleSubmit(item){
        const prev=props.list;
        props.updateList([...prev,item]);
      };
    return <div className="form">
        <input type="text" onChange={handleChange} value={item}/>
        <button type="submit" onClick={()=>{
            handleSubmit(item);
            updateItem("");
            }}>
          <span>Add</span>
        </button>
      </div>
}

export default InputArea;
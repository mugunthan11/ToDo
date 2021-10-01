import React from "react";

function Temp(props) {
  const { task, index, deleteing } = props;

   function onDeleter(){
       deleteing(index)

   }
  return (
    <div style={{display:"flex", alignItems:"center"}} >
      <p style={{marginRight:10}}>{`${index+1}. ${task}`}</p>
      <button onClick={onDeleter}>-</button>
    </div>
  );
}

export default Temp;

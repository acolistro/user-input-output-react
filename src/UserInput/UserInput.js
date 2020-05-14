import React from 'react';

const userInput = (props) => {
  const inputStyle = {
    border:'2px solid gold'
  };
  return (
      <input type="text" 
      style={inputStyle}
      onChange={props.changed} 
      value={props.currentName}/>
  )
};

export default userInput;
import React from 'react';
import './UserOutput.css'


const userOutput = (props) => {
  return (
    <div className="UserOutput">
      {/* <h3>{props.userName}</h3>
      <p>{props.paragraph1}</p>
      <p>{props.paragraph2}</p> */}
      <h3>Username: {props.userName}</h3>
      <p>First Paragraph</p>
      <p>Second Paragraph</p>
    </div>
  )
};

export default userOutput;
import React from 'react';
import UserInput from './User/UserInput';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h3>{props.userName}</h3>
      <p>{props.paragraph1}</p>
      <p>{props.paragraph2}</p>
    </div>
  )
};

export default userOutput;
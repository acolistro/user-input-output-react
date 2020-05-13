import React from 'react';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.paragraph1}</p>
      <p>{props.paragraph2}</p>
    </div>
  )
};

export default userOutput;
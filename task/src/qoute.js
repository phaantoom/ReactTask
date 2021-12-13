import './App.css';
import React from 'react';


function qoute(props){
console.log(props)

  return (
        <div className="card-content white-text">
          <span className="card-title">{props.props.auther}</span>
          <p>{props.props.qoute}</p>
        </div>
  );
}

export default qoute;
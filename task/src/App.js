import './App.css';
import React,{useState} from 'react';
import {connect} from 'react-redux';
import Qoute from './qoute.js';

function App(props){
  console.log(props.Qoutes)
  const [state] = useState(props)
  const [qoute,changeQoute] = useState(props.Qoutes.find(q=>q.id === Math.floor(Math.random() * 10)))
  console.log(qoute)

  function newQoute(){
    changeQoute(
      state.Qoutes.find(q=>q.id === Math.floor(Math.random() * 10))
    )
  }


  return (
    <div className="row center">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <Qoute props= {qoute}/>
        <div className="card-action">
          <button onClick={newQoute } className="waves-effect waves-light btn-small" style={{float: "left"}}>new qoute</button>
          <a href={"https://twitter.com/intent/tweet?text="+ qoute.qoute} target="_blank">Tweet</a>
        </div>
      </div>
    </div>
  </div>
  );
}

const MapStateToProps = (state) =>{
  return {
    Qoutes: state.Qoutes
  }
}


export default connect(MapStateToProps)(App);
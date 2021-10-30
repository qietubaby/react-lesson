// import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import React, { useReducer } from 'react';

const initial = {
  n: 0
}

const reducer = (state, action) => {
  if(action.type === 'add') {

    return {
      n:state.n+1
    }
  } else if(action.type === 'mult') {
      return {n: state.n*2}
    } else {
      throw new Error('unknown type')
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initial)

  const onClick = () => {
    dispatch({type: 'add'})
  }


  return (
    <div className="App">
      <h1>n: {state.n}</h1>
      <button onClick={onClick}> +1 </button>
    </div>
  )
}


  ReactDOM.render(

      <App firstName="Frank" lastName="Fang"/>,

    document.getElementById('root')
  );

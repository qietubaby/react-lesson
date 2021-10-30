// import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import React from 'react';

// useState的原理
// 这也解释了 useState不能写在if里，useState特别依赖顺序
let _state = []
let index = 0
const myUseState = initialValue => {
  const currentIndex = index
  _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
  const setState = newValue => {
    _state[currentIndex] = newValue
    render()
  }
  index += 1
  return [_state[currentIndex], setState]
}

const render = () => {
  index = 0
  ReactDOM.render(<App/>,  document.getElementById('root'))
}


function App() {
  const [n, setN] = myUseState(0)
  const [m, setM] = myUseState(0)
  return (
    <div>
      <p>
      <h1>{n}</h1>
      <button onClick={()=>{setN(n + 1)}}>+ 1</button>
      </p>
      <p>
      <h1>{m}</h1>
      <button onClick={()=>{setM(m + 1)}}>+ 1</button>
      </p>
    </div>
  )
}


  ReactDOM.render(

      <App firstName="Frank" lastName="Fang"/>,

    document.getElementById('root')
  );

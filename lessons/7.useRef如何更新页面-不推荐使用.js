// import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import React from 'react';

function App() {
  const nRef = React.useRef(0) // { current: 0 }
  const log = () => setTimeout(()=>console.log(`n:${nRef.current}`), 1000)
  const [n, setN] = React.useState(-1)
  return (
    <div>
       <h1>{nRef.current}</h1>
      <p>
      {/*
          不管先点击哪个按钮，打印出的结果都是正确的，但是页面不会更新
      */}
      <button onClick={()=> {
        (nRef.current += 1)
        setN(nRef.current)
      }} >+ 1</button>
      <button onClick={log}>log</button>
      </p>

    </div>
  )
}


  ReactDOM.render(

      <App firstName="Frank" lastName="Fang"/>,

    document.getElementById('root')
  );

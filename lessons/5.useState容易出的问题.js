// import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import React from 'react';

function App() {
  const [n, setN] = React.useState(0)
  const log = () => setTimeout(()=>console.log(`n:${n}`), 1000)
  return (
    <div>
       <h1>{n}</h1>
      <p>
      {/*
        如果先点击第一个按钮，再点击第二个按钮打印出 1
        如果先点击第二个按钮，再点击第一个按钮打印还是打印出 0，有bug 打印出了旧的数据
        意愿：setN不会改变n 会生成新的n

        如果我希望有一个贯穿始终的状态，怎么做

        全局变量  useRef  useContext
      */}
      <button onClick={()=>{setN(n + 1)}}>+ 1</button>
      <button onClick={log}>log</button>
      </p>

    </div>
  )
}


  ReactDOM.render(

      <App firstName="Frank" lastName="Fang"/>,

    document.getElementById('root')
  );

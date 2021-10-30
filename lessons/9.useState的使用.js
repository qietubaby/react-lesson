// import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(() => ({  //默认值可以是对象,也可以是函数
    name: 'Frank',
    age: 18
  }))
  const onClick = () => {
    setUser({
      ...user,
      name: 'jack'
    })
  }

  const [n, setN] = useState(0)
  const onClick2 = () => {
    // setN(n+1)
    // setN(n+1) 如果连续写两次setN(n+1)只会执行一次，只有最后一次有用

    // 改造后 这样就实现了一次 + 2
    setN(i => i+1)
    setN(i => i+1)
  }

  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <button onClick={onClick}>Click</button>


      <br/>
      <h1>{n}</h1>
      <button onClick={onClick2}>Click2</button>
    </div>
  )
}


  ReactDOM.render(

      <App firstName="Frank" lastName="Fang"/>,

    document.getElementById('root')
  );

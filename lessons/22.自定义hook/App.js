import React, {  useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import useList from './myhooks'

// 如何记录App渲染了多少次
const App = () => {
    const {list, deleteIndex} = useList()

    return (
        <div className="App">
           <h1>List</h1>
           {list ? (
               <ol>
                   {list.map((item, index) => 
                        <li key={item.id}>
                           {item.name}
                           <button onClick={()=>{
                               deleteIndex(index)
                           }}>XXXX</button>
                       </li>
                   )}
               </ol>
            ) : '加载中...'
           }
       </div>
    
   )
}


ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

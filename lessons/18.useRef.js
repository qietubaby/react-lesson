import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import ReactDOM from 'react-dom'

// 如何记录App渲染了多少次
const App = () => {
    const count = useRef(0) //作用：如果你需要一个值，在组件不断render时保持不变，为了保证两次useRef是同一个值（只有引用能做到）
    const [n, setN] = React.useState(0)
    const onClick = () => {
      setN(n + 1)
    }

    useEffect(()=>{
      count.current += 1
      console.log(count.current)
    })

    return (
        <div className="app">
            <div>
                <button onClick={onClick}> update n {n} </button>
                <div>{count.current}</div>
            </div>
        </div>
    )
}



ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

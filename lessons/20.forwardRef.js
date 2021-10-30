import React, { useCallback, useEffect, useMemo, useRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'

// 如何记录App渲染了多少次
const App = () => {
    const buttonRef = useRef(null)
    useEffect(()=>{
        console.log(buttonRef.current)
    },[])
    return (
       <div className="App">
           <Button2 ref={buttonRef}>
                按钮
           </Button2>
           <button className="close" onClick={()=>{
               buttonRef.current.remove()
           }}>
               X
           </button>
       </div>
   )
}



const Button2 = React.forwardRef((props, ref)=>{
    return <button className="red" ref={ref} {...props}/>
})

ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

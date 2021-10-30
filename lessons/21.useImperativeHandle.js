import React, { useCallback, useEffect, useMemo, useRef, forwardRef, useImperativeHandle, createRef } from 'react'
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
               
               buttonRef.current.x()
           }}>
               X
           </button>
       </div>
   )
}



const Button2 = React.forwardRef((props, ref)=>{
    const realButton = createRef(null)
    const setRef = useImperativeHandle  //提供虚假的ref，以达到不可告人的目的吧
    setRef(ref, () => {
        return {
            x: () => {
                realButton.current.remove()
            },
            realButton  //写上这个就是真实的ref，不写就是假的ref
        }
    })
    return <button className="red" ref={realButton} {...props}/>
})

ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

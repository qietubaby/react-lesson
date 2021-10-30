import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [n, setN] = React.useState(0)
    const [m, setM] = React.useState(0)
    const onClick = () => {
        setN(n + 1)
    }
    const onClickChild = () => {}
    return (
        <div className="app">
            <div>
                <button onClick={onClick}> update n {n} </button>
            </div>
            <Child2 data={m} onClick={onClickChild} /> 
        </div>
    )
}

function Child(props) {
    console.log('child 执行了')
    console.log('假设这里有大量代码')
    return <div onClick={props.onClick}>child: {props.data}</div>
}

const Child2 = React.memo(Child) // 虽然使用了memo，子组件还是会重新渲染，因为Child组件里面后函数，函数是引用类型。由于App重新渲染了，onClickChild函数的地址已经变了

ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

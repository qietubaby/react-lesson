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
            <Child2 data={m} />
        </div>
    )
}

function Child(props) {
    console.log('child 执行了')
    console.log('假设这里有大量代码')
    return <div>child: {props.data}</div>
}

const Child2 = React.memo(Child) // 如果没有使用memo，当点击按钮的时候，Child组件每次都会重新渲染。影响性能

ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

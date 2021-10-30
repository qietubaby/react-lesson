import React, { useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [n, setN] = React.useState(0)
    const [m, setM] = React.useState(0)
    const onClick = () => {
        setN(n + 1)
    }

    // const onClickChild = useMemo(() => {
    //   return () => {}
    // },[])

    // useCallback和useMemo作用一样，写法比较简单

    const onClickChild = useCallback(() => {
      console.log(m)
    }, [m])

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

const Child2 = React.memo(Child)

ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

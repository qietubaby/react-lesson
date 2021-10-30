import React, {
    useReducer,
    useEffect,
    useContext,
    useState,
    useLayoutEffect,
} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [value, setValue] = useState(0)
    const [show, setShow] = useState(true)
    const [y, setY] = useState(20)
    const [roboGallery, setRoboGallery] = useState([])
    useEffect(() => { 
        document.querySelector('#x').innerText = `value: 1000`
    }, [value])

    useEffect(() => {
        console.log(1)
    }, []) //mounted

    useEffect(() => {
        console.log(2)
    })

    // 如何在useEffect中使用async await
    useEffect(()=>{
        const fetchData = async () => {
           const responseData = await fetch('xxx');
           const data = await responseData.json()
           setRoboGallery(data); 
        }
        fetchData()
    },[])

    //比useEffect先执行，浏览器画图前执行
    useLayoutEffect(() => {
        console.log(3)
        document.querySelector('#y').innerText = `y: 1000`
    })

    return (
        <div>
            <div id="x" onClick={() => setValue(0)}>
                value: {value}
            </div>
            <div id="y" onClick={() => setValue(0)}>
                y: {y}
            </div>
            {show ? <Child /> : null}

            <p>
                n: {value}
                <button
                    onClick={() => {
                        setShow(!show)
                    }}
                >
                    {' '}
                    + 1
                </button>
            </p>
        </div>
    )
}

const Child = () => {
    useEffect(() => {
        const id = setInterval(() => {
            console.log('hi')
        }, 1000)
        return () => {
            window.clearInterval(id)
        }
    })
    return <div>Child</div>
}

ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

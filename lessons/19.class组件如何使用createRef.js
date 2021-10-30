import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    forwardRef,
} from 'react'
import ReactDOM from 'react-dom'

// 如何记录App渲染了多少次

class App extends React.Component {
    constructor() {
        super()
        this.change = React.createRef(null)
    }
    //    const buttonRef = forwardRef(null)
    //    console.log(buttonRef)
    componentDidMount() {
        console.log(this.change.current)

        console.log(2343)
    }
    render() {
        return (
            <div className="App">
                <Button2 ref={this.change}>按钮</Button2>
            </div>
        )
    }
}

class Button2 extends React.Component {
    render() {
        return <button className="red" />
    }
}

ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

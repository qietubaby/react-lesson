import React from 'react'
// import logo from './logo.svg';
import './App.css'
import PropTypes from 'prop-types'

// PureComponent: 优化后的Component 只对比props的第一层的所有值，第一层都一样就不会更新组件
class App extends React.Component {

  static defaultProps = {
    message: 'default message'
  }

  static propTypes = {
    message: PropTypes.string
  }

  static displayName = 'Frank' // 唯一的作用是方便开发，在react浏览器工具中可以方便看到组件的名称
  constructor(props) {
    super(props);
    this.state = {
      n: 1
    }
    // this.y = this.x.bind(this)   y是绑定了this的x，写的时候直接用y就可以了,其实跟下面的写法一样
    // this.x = () => {
    //   this.setState({
    //     n: 2
    //   })
    // }
  }
  // 只不过是把constrctor中的this.x移了出来
  // 箭头函数缺点：只要有一个实例就会有一个x，浪费内存
  x = () =>  {
    this.setState({
      n: 2
    })
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>{this.props.message}</div>
        <div>{this.state.n}</div>
        <button onClick={this.x}> +1 </button>
      </div>
    )
  }
}

export default App;

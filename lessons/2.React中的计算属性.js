import React from 'react'
// import logo from './logo.svg';
import './App.css'
import PropTypes from 'prop-types'

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
    
  }

  x = () =>  {
    this.setState({
      n: 2
    })
  }

  // react的计算属性
  get name() {
    return this.props.firstName + ' ' +  this.props.lastName
  }

  set name(newName){
    const [firstName, lastName] = newName.split(' ')
    this.setState({
      firstName,
      lastName
    })
  }
  
  componentDidMount() {}

  render() {
    return (
      <div>
        <div>{this.props.message}</div>
        <div>{this.state.n}</div>
        <button onClick={this.x}> +1 </button>
        <div>{this.name}</div>
      </div>
    )
  }
}

export default App;

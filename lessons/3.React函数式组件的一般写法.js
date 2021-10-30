import React, {useEffect, useState} from 'react'
// import logo from './logo.svg';
import './App.css'
import PropTypes from 'prop-types'

const App = ({message = 'default message'}) => {

  // 注意：useState不能写在if里，useState特别依赖顺序
  const [n, setN] = useState(1)
  const [m, setM] = useState(2)
  // const [user, setUser] = useState({
  //   id: '1'
  // })

  // const [user, setUser] = useState(null)


  const x = () => {
    setN(n+1)
  }

  const y = () => {
    setM(m+1)
  }

  // useEffect(()=>{
  //   console.log('UI更新之后执行');//对应mounted或updated之后
  // })

  useEffect(()=>{
    console.log('mounted');//这种写法只对应mounted,在这里进行ajax操作,只运行一次
    return () => {
      console.log('我死了');// 在组件死之前调用
    }
  }, [])

  useEffect(()=>{
    console.log('UI更新之后执行');//这种写法只对应mounted,在这里进行ajax操作
  }, [m])

  return (
    <div>
      <div>{message}</div>
      <h1>{n}，{m}</h1>
      <button onClick={x}>+ 1</button>
      <button onClick={y}>+ 1</button>
    </div>
  )
}

App.defaultProps = {
  message: 'default message'
}
App.displayName = 'Frank'

App.propTypes = {
  message: PropTypes.string
}

export default App;

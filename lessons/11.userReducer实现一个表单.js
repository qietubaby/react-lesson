// import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import React, { useReducer } from 'react';

const initFromData = {
  username: 'Lee',
  age: 18,
  nationalty: '汉族'
}

const reducer = (state, action) => {

    switch(action.type) {
      case 'patch':
        return {  ...state, ...action.formData }
      case 'reset': 
        return initFromData
      default: 
        throw new Error('你传的啥')
    }
  
}


function App() {
  const [formData, dispatch] = useReducer(reducer, initFromData)

  const onSubmit = () => {
    
  }
  const onReset = () => {
    dispatch({type: 'reset'})
  }
  const onChange = (e) => {
    dispatch({type: 'patch', formData: { username: e.target.value } })
  }


  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <div>
        <label>
          姓名
          <input value={formData.username} 
            onChange={onChange}
          />
        </label>
        {formData.username}
        <button type="reset">重置</button>
      
      </div>
    </form>
  )
}


  ReactDOM.render(

      <App firstName="Frank" lastName="Fang"/>,

    document.getElementById('root')
  );

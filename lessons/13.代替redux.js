import React, { useReducer, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'

const store = {
  user: null,
  books: null,
  movies: null
}

function reducer(state, action) {
  switch(action.type) {
    case 'setUser':
      return {...state, user: action.user};
    case 'setBooks':
      return {...state, books: action.books};
    case 'setMovies':
      return {...state, movies: action.movies}
    default:
      throw new Error()
  }
}

const Context = React.createContext(null)

function App() {
    const [state, dispatch] = useReducer(reducer, store)
    const api = { state, dispatch };

    return (
      <Context.Provider value={api}>
        <User />
        <hr />
        {/* <Books />
        <Moviews /> */}
      </Context.Provider>
    )
}

function User() {
  const {state, dispatch} = useContext(Context);
  useEffect(()=>{
    ajax('/user').then(user => {
      dispatch({type: 'setUser', user})
    })
  }, []);
  return (
    <div>
      <h1>个人信息</h1>
      <div>name: {state.user? state.user.name : ''}</div>
    </div>
  )
}

ReactDOM.render(
    <App firstName="Frank" lastName="Fang" />,

    document.getElementById('root')
)

function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(path === '/user') {
        resolve({
          id: 1,
          name: 'frank'
        })
      }
    }, 2000)
  })
}

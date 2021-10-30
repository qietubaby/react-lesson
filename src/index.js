import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.js';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import dialogExample from './dialog/dialog.example'

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          FUI
        </div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/dialog" component={dialogExample}></Route>
        </main>
      </div>
    </div>
  </Router>
 ,
  document.getElementById('root')
);


 // <React.StrictMode>
  //   <App firstName="Frank" lastName="Fang"/>
  // </React.StrictMode>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

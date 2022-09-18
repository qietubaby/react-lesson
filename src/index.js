import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.js';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import dialogExample from './dialog/dialog.example';
import formExample from './form/form.example';
import scrollExample from './scroll/scroll.example';
import TreeExample from './tree/tree.example';
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
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/scroll">Scroll</Link>
            </li>
            <li>
              <Link to="/tree">Tree</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/dialog" component={dialogExample}></Route>
          <Route path="/form" component={formExample}></Route>
          <Route path="/scroll" component={scrollExample}></Route>
          <Route path="/tree" component={TreeExample}></Route>
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

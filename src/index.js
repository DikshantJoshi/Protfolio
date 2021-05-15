import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Route,Link,withRouter} from 'react-router-dom'
import Pledge from "./Components/Pledge.js"
import Container from './Components/Container.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route exact path='/Pledge' component={withRouter(Pledge)}/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

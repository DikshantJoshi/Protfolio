
import React from 'react'
import './App.css';
import Container from './Components/Container.js';
import {BrowserRouter,Router} from 'react-router-dom'
import {Route,Link,withRouter} from 'react-router-dom'
import Pledge from "./Components/Pledge.js"




function App() {
  return (
    <div className="App">
      
      <Container/>
      {/* <Pledge/> */}
      
     
     {/* <Route exact path="/" component={Container} />  */}
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Header.js";
import Slider from "./Slider.js";
import SectionII from "./SectionII.js";
import SectionIII from "./SectionIII.js";
import SectionIV from "./SectionIV.js";
import Div from './Div.js'
import Pledge from "./Pledge.js"
import {Route,Link,withRouter} from 'react-router-dom'


const Container = () => {
  return (
    <div>
      <div>
        <Header />
        <Slider />
        <SectionII />
        <Div/>
        <SectionIII />
        <SectionIV />
        
      </div>
    </div>
  );
};

export default Container;

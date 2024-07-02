import React from "react";
import web from "../src/Images/Ani2.gif"
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
    return (<>
        <Common
         name="Welcome To About Page"
         imgsrc={web}
          visit="/contact"
           btnname="Contact Now"/>
    </>)
};

export default About; 
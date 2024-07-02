import React from "react";
import web from "../src/Images/Ani1.gif"
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return (<>
        <Common
            name="Grow Your Business With"
         imgsrc={web}
          visit="/service"
           btnname="Get Started"
        />
    </>)
};

export default Home;
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import React from "react";

import NavBar from "./NavBar"
import BookCall from "./booking"
 
const Home = () => {
    return(
        <div>
            <NavBar />
            <BookCall />
        </div>
    )
}

export default Home;
import React from "react"
import { useLocation } from "react-router-dom";

import { navName } from "../helper"

const NavBar = () => {

    let location = useLocation();

    return(
        <nav className="navbar navbar-light bg-color">
            <div className="container-fluid center">
            <a className="navbar-brand" href="#"><b>{navName.map(x => {
                if(x.path === location.pathname)
                  return x.value
            })}</b></a>
            </div>
        </nav>
    )
}

export default NavBar;
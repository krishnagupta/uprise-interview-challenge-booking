import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home"
import AvailabilitySlots from "./components/availability"
import BookingStatus from "./components/booking/BookingStatus"
import ShowAllEvents from "./components/events"
import ShowEvents from "./components/events/ShowEvents"
import NavBar from "./components/NavBar"

const Routes = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/slots" exact component={AvailabilitySlots} />
                <Route path="/status" exact component={BookingStatus} />
                <Route path="/events" exact component={ShowAllEvents} />
                <Route path="/events/show" exact component={ShowEvents} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
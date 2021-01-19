import React, {useState, useEffect} from "react";
import { Card } from '@uprise/card'
import { Button } from '@uprise/button'
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { getFreeSlots, createEvents } from "../../api"

const AvailabilitySlots = () => {

    const [slots, setSlots] = useState([])

    const history = useHistory();
    const location = useLocation();
    const {date, timeZone} = queryString.parse(location.search)

    const init = () => {
        getFreeSlots(date).then(data => {
            setSlots(data.slot)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        init()
    },[])

    const bookSlot = slot => {
        const timeSlot = slot.split("-")[0]
        console.log(timeSlot)
        const eventData = {
            date,
            timeZone,
            slot: timeSlot
        }
        createEvents(eventData).then(data=>{
            history.push("/status")
        }).catch(err => console.log(err))
    }

    return(
        <Card className="card_style container mt-5 p-5  bg-color">
            <h3>Click on any of the time slots to book</h3>
            <div className="display_slots mt-5">
            {slots && slots.map((slot, index) => <Button title={slot} onClick={() => bookSlot(slot)}className="mr-2"></Button>)}
            </div>
        </Card>
    )
}

export default AvailabilitySlots;
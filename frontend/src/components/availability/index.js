import React from "react";
import { Card } from '@uprise/card'
import { Button } from '@uprise/button'
import { useHistory } from 'react-router-dom';

import BookingStatus from "../availability"

const timeSlots = [
    '11:00 AM - 11:30 AM',
    '11:30 AM - 12:00 PM',
    '12:00 PM - 12:30 PM',
    '12:30 PM - 01:00 PM',
    '01:00 PM - 01:30 PM',
    '01:30 PM - 02:00 PM'
]

const AvailabilitySlots = () => {

    const history = useHistory();

    return(
        <Card className="card_style container mt-5 p-5  bg-color">
            <h3>Click on any of the time slots to book</h3>
            <div className="display_slots mt-5">
            {timeSlots.map(slot => <Button title={slot} onClick={() => history.push("/status")}className="mr-2"></Button>)}
            </div>
        </Card>
    )
}

export default AvailabilitySlots;
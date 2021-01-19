import React from "react";
import { Card } from '@uprise/card'
import { FaCheckCircle } from 'react-icons/fa'

const BookingStatus = () => {

    return(
        <Card className="card_style container mt-5 p-5  bg-color text-center">
           <FaCheckCircle size="5em"/>
           <div>Booking Successful!</div>
        </Card>
    )
}

export default BookingStatus;
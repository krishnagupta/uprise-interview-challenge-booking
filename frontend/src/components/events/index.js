import React, { useState } from "react";
import { Card } from '@uprise/card'
import { Col, Row } from '@uprise/grid'
import { Button } from '@uprise/button'
import { useHistory } from 'react-router-dom';
import moment from 'moment'

import Calendar from "./Calendar"

const ShowAllEvents = () => {
   const [date, setDate] = useState(moment())
    const history = useHistory();

    const handleChange = date => {
        console.log(date)
        setDate(date)
    }

    return(
        <Card className="card_style_events container mt-5 p-5  bg-color">
           <Calendar date={date} handleChange={handleChange} />
           <Button className="mt-2" title="Show events" onClick={() => history.push({pathname:"/events/show", search:`?date=${date}`})}></Button>
        </Card>
    )
}

export default ShowAllEvents;
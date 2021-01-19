import React, { useState } from "react";
import { Col, Row } from '@uprise/grid'
import { Card } from '@uprise/card'
import { Button } from '@uprise/button'
import { useHistory } from 'react-router-dom';
import moment from 'moment'

import Calendar from "./Calendar"
import TimeZoneSelection from "./TimeZoneSelection"
import CallDurationSelection from "./CallDurationSelection"

const BookCall = () => {
    const history = useHistory();

    const [values, setValues] = useState({
        date: moment(),
        timeZone: {},
        duration: ''
    })

    const { date, timeZone, duration, formData } = values;

    const handleChange = name => event => {
        const value = name === "timeZone" ? event.value : event
        setValues({ ...values, [name]:value})
    }

    const clickSubmit = (e) => {
        e.preventDefault()
      
    }

    return(
        <Card className="card_style container mt-5 p-5  bg-color">
            <form onSubmit={clickSubmit}>
                <Row>
                    <Col className="col-sm-6"><Calendar date={date} handleChange={handleChange} /></Col>
                    <Col className="col-sm-6">
                        <Row><Col className="col-sm-12"><TimeZoneSelection timeZone={timeZone} handleChange={handleChange} /></Col></Row>
                        <Row><Col className="col-sm-12 mt-5"><CallDurationSelection duration={duration} handleChange={handleChange} /></Col></Row>
                    </Col>
                </Row>
                <Row>
                <Col><Button className="mt-2" title="Get Free Slots" onClick={() => history.push({pathname: "/slots", search: `?date=${date}&timeZone=${timeZone}`})}></Button></Col>
                </Row>
            </form>
        </Card>
    )
}

export default BookCall;
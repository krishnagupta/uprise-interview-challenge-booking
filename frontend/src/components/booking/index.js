import React from "react";
import { Col, Row } from '@uprise/grid'
import { Card } from '@uprise/card'
import { Button } from '@uprise/button'
import { useHistory } from 'react-router-dom';

import Calendar from "./Calendar"
import TimeZoneSelection from "./TimeZoneSelection"
import CallDurationSelection from "./CallDurationSelection"

const BookCall = () => {
    const history = useHistory();

    return(
        <Card className="card_style container mt-5 p-5  bg-color">
            <Row>
                <Col className="col-sm-6"><Calendar /></Col>
                <Col className="col-sm-6">
                    <Row><Col className="col-sm-12"><TimeZoneSelection /></Col></Row>
                    <Row><Col className="col-sm-12 mt-5"><CallDurationSelection /></Col></Row>
                </Col>
            </Row>
            <Row>
              <Col><Button className="mt-2" title="Get Free Slots" onClick={() => history.push("/slots")}></Button></Col>
            </Row>
        </Card>
    )
}

export default BookCall;
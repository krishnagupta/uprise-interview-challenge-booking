import React from "react";
import { Card } from '@uprise/card'
import { Col, Row } from '@uprise/grid'
import { Button } from '@uprise/button'
import { useHistory } from 'react-router-dom';

import Calendar from "./Calendar"

const ShowAllEvents = () => {

    const history = useHistory();

    return(
        <Card className="card_style container mt-5 p-5  bg-color">
           <Row><Col className="col-md-12"><Calendar /></Col></Row>
           <Row><Col className="col-md-12"><Button className="mt-2" title="Show events" onClick={() => history.push("/events/show")}></Button></Col></Row>
        </Card>
    )
}

export default ShowAllEvents;
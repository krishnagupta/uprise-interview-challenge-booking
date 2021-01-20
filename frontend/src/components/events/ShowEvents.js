import React, {useState, useEffect} from "react"
import { Card } from '@uprise/card'
import { Button } from '@uprise/button'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import moment from 'moment'

import { getAllEvents } from "../../api"

const ShowEvents = () => {

    const location = useLocation();
    const {date} = queryString.parse(location.search)

    const [slots, setSlots] = useState([])

    const init = () => {
        getAllEvents(date).then(data => {
            setSlots(data.slot)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        init()
    },[])

    return(
        <Card className="card_style container mt-5 p-5  bg-color">
            <h3>Here are all the events on {moment(date).format('ll')}</h3>
            <div className="display_slots mt-5">
            {slots&& slots.map(slot => <div className="slots"><Button title={slot} className="mr-2"></Button></div>)}
            </div>
     </Card>
    )
}

export default ShowEvents;
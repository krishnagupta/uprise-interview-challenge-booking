import React from "react";
import moment from 'moment'
import { SingleDatePicker } from "react-dates" 
 
const Calendar = () => {
    return(
      <div>
        <h3>Here are all the events on</h3>
       <SingleDatePicker
        date={moment()} // momentPropTypes.momentObj or null
        onDateChange={date => console.log(date)} // PropTypes.func.isRequired
        focused={true} // PropTypes.bool
        onFocusChange={({ focused }) => console.log(focused)}
        id="calendar" // PropTypes.string.isRequired,
        numberOfMonths={1}
        hideKeyboardShortcutsPanel={true}
        noBorder={true}
      />
      </div>
        
    )
}

export default Calendar;
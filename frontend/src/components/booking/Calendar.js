import React from "react";
import { SingleDatePicker } from "react-dates" 
 
const Calendar = ({ date, handleChange }) => {
    return(
      <>
        <h3>Select a Date</h3>
       <SingleDatePicker
        date={date} // momentPropTypes.momentObj or null
        onDateChange={handleChange('date', date)} // PropTypes.func.isRequired
        focused={true} // PropTypes.bool
        onFocusChange={({ focused }) => {}}
        id="calendar" // PropTypes.string.isRequired,

        numberOfMonths={1}
        hideKeyboardShortcutsPanel={true}
        noBorder={true}
      />
      </>
        
    )
}

export default Calendar;
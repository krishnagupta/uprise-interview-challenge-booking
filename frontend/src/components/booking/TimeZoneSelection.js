import React from 'react'
import TimezoneSelect from 'react-timezone-select'

const TimeZoneSelection = ({ timeZone, handleChange }) => {

  return (
    <div>
      <h3>Select your timezone</h3>
      <div>
        <TimezoneSelect
          value={timeZone}
          onChange={handleChange('timeZone', timeZone)}
        />
      </div>
    </div>
  )
}

export default TimeZoneSelection;

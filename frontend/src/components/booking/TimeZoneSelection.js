import React, { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'

const TimeZoneSelection = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({})

  return (
    <div>
      <h3>Select your timezone</h3>
      <div>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
    </div>
  )
}

export default TimeZoneSelection;

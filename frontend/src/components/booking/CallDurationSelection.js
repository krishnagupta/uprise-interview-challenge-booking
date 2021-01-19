import React from 'react'
import Select from 'react-select'

const options = [
    { value: '15', label: '15 Minutes' },
    { value: '30', label: '30 Minutes' },
    { value: '60', label: '60 Minutes' },
  ];

const CallDurationSelection = ({ duration, handleChange }) => {

  return (
    <div>
    <h3>Select call duration</h3>
    <Select
        value={duration}
        onChange={handleChange('duration', duration)}
        options={options}
      />
      </div>
  )
}

export default CallDurationSelection;

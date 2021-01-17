import React, { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: '15', label: '15 Minutes' },
    { value: '30', label: '30 Minutes' },
    { value: '60', label: '60 Minutes' },
  ];

const CallDurationSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleChange = selected => {
    setSelectedOption(selected)
    console.log(`Option selected:`, selected);
  };

  return (
    <div>
    <h3>Select call duration</h3>
    <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      </div>
  )
}

export default CallDurationSelection;

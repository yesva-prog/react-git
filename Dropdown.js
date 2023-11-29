import React from 'react'

function Dropdown() {
  return (
    <div>
    <h2>Dropdown Example</h2>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select an option
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      </div>
  )
}

export default Dropdown

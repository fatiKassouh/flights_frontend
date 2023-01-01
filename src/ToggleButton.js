import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';


function ToggleButton() {
    const [isOn, setIsOn] = useState(false);
    function handleClick() {
        setIsOn(!isOn);
    }

  return (
    <div>ToggleButton
        <Button className="btn btn-primary" style={{ fontSize: 20 }} onClick={handleClick}>
        {isOn ? 'Turn off' : 'Turn on'}
    </Button>
    </div>
  )
}

export default ToggleButton


  

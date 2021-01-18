import React from 'react'

const ButtonCharge = ({textButton, clickBehaviour}) => {

    const handleClick = () => {
        clickBehaviour && clickBehaviour()
    }


  return(
      <button onClick={handleClick}>
          {textButton}
      </button>
  )
}

export default ButtonCharge;
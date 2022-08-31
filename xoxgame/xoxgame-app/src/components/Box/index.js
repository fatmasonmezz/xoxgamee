import React, { useState } from 'react'

function Box(props) {
    const[text,setText]=useState("")
    function swapText(){
        if(text===''){
            setText(props.currentState)
            props.changeTurn(props.row,props.col);
        }
    }



  return (
    <div className='box' onClick={swapText}>{text}</div>
  )
}

export default Box
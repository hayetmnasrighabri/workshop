import React from 'react'
import {LoremIpsum} from 'react-lorem-ipsum'
function Bloc(props) {
  return (
    <div style={{color: props.CL}}>
         {props.title}
         <LoremIpsum p={1} />
    </div>
  )
}

export default Bloc

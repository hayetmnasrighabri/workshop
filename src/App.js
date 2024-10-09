import React, { useState } from 'react'
function App() {
  const [value, setValue]= useState(0)
  return (
    <div>
      <div>{value}</div>
    <button onClick={()=>setValue(value+1)}>Inc</button>
    <button onClick={()=>setValue(value-1)}>Dec</button>
    </div>
  )
}

export default App

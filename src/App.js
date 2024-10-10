import React, { useEffect, useState } from 'react'

function App() {
  const [products, setProducts]=useState([])
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
  })
  return (
    <div className='App' >
      <table>
        <thead>
          
          <th>Title</th>

        </thead>
        <tbody>
        
            {products.map(product=>(
                <tr>
              <td>{product.title}</td>
              </tr>
            ))}
            
         
        </tbody>
      </table>
    </div>
  )
}

export default App

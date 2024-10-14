import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd'
import { Table } from 'antd';
function App() {
  const [products, setProducts]=useState([])
  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: ' price',
      dataIndex: ' price',
      key: ' price',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: ' description',
      dataIndex: ' description',
      key: ' description',
    },
    {
      title: ' image',
      dataIndex: 'image',
      key: 'image',
    },
  ];

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
  })
  return (
    <div className='App' >
       <Table columns={columns} />
     
      
    </div>
  )
}

export default App

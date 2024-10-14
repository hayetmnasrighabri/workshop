import React, { useEffect, useState } from 'react'
import { Rate, Table } from 'antd';
import { Image } from 'antd'

function App() {
  const [products, setProducts]=useState([])
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
  
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: ' Image',
      dataIndex: 'image',
      key: 'image',
      render:(_,record)=>{
        return (<Image
          width={100}
          src={record.image}
          alt={record.title}
        />

        )}

    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: ' Rating',
      dataIndex: 'rating',
      key: 'rating',
      render:(_,record)=>{
        return <Rate allowHalf defaultValue={record?.rating?.rate} />
      }
    }
  ];

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
  },[])
  return (
    <div className='App' >
       <Table dataSource={products} columns={columns} />
    </div>
  )
}

export default App

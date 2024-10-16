import React, { useEffect, useState } from 'react'
import { Rate, Table } from 'antd';
import { Image } from 'antd'
import { BsTrash } from "react-icons/bs";
function App() {
  const [products, setProducts]=useState([])
  const Deletehandler=(id)=>{
    setProducts(products.filter(p=>p.id!=id))

  }
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
        return <Rate allowHalf disabled={true} defaultValue={record?.rating?.rate} />
      }
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: (_,{id})=>{
        return <BsTrash style={{fontSize:"25px", color:"red", cursor:"pointer"}}
            onClick={()=>Deletehandler(id)}
            />
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

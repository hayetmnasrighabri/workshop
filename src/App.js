import React, { useEffect, useState } from 'react'
import { BsTrash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import axios from 'axios';
import { Flex, Spin, Image, Typography, message, Skeleton,  Button, Modal,  Rate, Table  } from 'antd';
import { Badge, Card, Space } from 'antd';

function App() {
  const [products, setProducts]=useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [singleP, setSingleP]=useState({})
   const { Title } = Typography;
  const fetchSingleProduct=(id)=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      setSingleP(res.data)
  })}
  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
    setSingleP()
  };
  const Deletehandler=async(id)=>{
   await setProducts(products.filter(p => p.id != id))
    message.success("product delete")
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
        return( 
        <>
        <BsTrash style={{fontSize:"25px", color:"red", cursor:"pointer"}}
            onClick={()=>Deletehandler(id)}
            />
            <IoEyeOutline  style={{fontSize:"30px", color:"teal", cursor:"pointer"}}
              onClick={()=>{
                fetchSingleProduct(id)
                showModal()}
              }
                />
        </>
        )
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
      {products?.length? 
      <>
      <Table dataSource={products} columns={columns} />
       
      </>
      :<Skeleton />}
       
      <Modal 
        footer={null}   
      title="Detail Product"
       open={isModalOpen}
         onCancel={handleCancel}
        >
        {singleP?.id?
        <>
        <p>
          <div style={{display:"flex"}}>
          <img src={singleP?.image} width="150px"/>
          <div style={{flexDirection:"column"}}>
          <p><Title level={4}>{singleP?.price}$</Title></p>
            <Badge.Ribbon text="count">
            {singleP?.rating?.count}
            <Card  size="small">
            
            </Card>
    </Badge.Ribbon>
    </div>
          </div>
          
        </p>
        <p>
        <Title level={2}>{singleP?.title}</Title>
        </p>
        <p><Title level={3}>{singleP?.category}</Title></p>
        <p><Title level={5}>{singleP?.description}</Title></p>
       
        </>   
        : <Spin size="large" />}
        
      </Modal>
    </div>
  )
}

export default App

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './Orders.css'
import {  Container, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';




// import React, { useEffect, useState } from 'react';

// import Bg from '../../../images/test-monial-bg.jpg'

// const BannerBg = {
//     background: url(${Bg}),
//     height: "100%",
//     backgroundPosition:"center"
    
// }
const Orders = () => {
    const {productId}=useParams()
    const [purchages, setPurchages] = useState([])
    const [isDeleted, setIsDeleted] = useState(true)
    // console.log(pr);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user,token}=useAuth()

    const [order, setOrders]= useState([])

    useEffect(()=>{
        const url='https://mysterious-wave-37002.herokuapp.com/orders'
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setOrders(data)})
    },[])
   
    const handleDelete=(id)=>{
        console.log(id);
        const confirmation = window.confirm("Are you sure to delete!!");
        if (confirmation) {
            fetch(`https://mysterious-wave-37002.herokuapp.com/DeleteOrder/${id}`,{
                method:"DELETE",
            })
           .then(res=>res.json())
                .then(data => {
                    if (data.deletedCount) {
                        
                        setIsDeleted(true)
                    }
                    else {
                        setIsDeleted(false)
                        alert("Something went wrong!!");
                    }
                    
                })
           
        }
        }
       



    const onSubmit = data => {
        data.order = order;
        console.log(data);
        order.status = 'pending'
         console.log( order.status);
        
        fetch('https://mysterious-wave-37002.herokuapp.com/orderConfirms',{
            method:'POST',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('Order process Successfully')
                
                reset()
            }
        })
     }

    return (
        <div  className='container' >
            <h2>Your Order: {order.length}</h2>
            
       {
           order.map(order=> <Container sx={{ flexGrow: 1 }} className=' p-5'  >
           <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
           
                   <Card sx={{ minWidth: 275,  border: 0, boxShadow: 0  }} className=''>
                       <CardMedia
                           component="img"
                           style={{ height:'250px', margin:"0 auto"}}
                           image={order.img}
                           alt="green iguana"
                           />
                       
                           <CardContent>
                               <Typography variant="h5" component="div" sx={{color:'orange'}}>
                               {order.name}
                               </Typography>
                               
                               <Typography variant="body2" color="text.white" sx={{color:'#000000'}}>
                               {order.description}
                               </Typography>
                           
                               <Typography variant="h5" color="text.white" sx={{color:'#fff'}} className='d-flex mb-3 justify-content-evenly'>
                               <spam className='text-warning'>{order.duration}days</spam> <span className='text-warning'>{order.price}$</span>
                               </Typography>
                                   
                               <Box>
                                   
                                   <button onClick={()=>{handleDelete(order._id)}}  className='fw-bold rounded '> Cancle Order </button>
                                 
                           </Box>
                            
                        
   
                       
   
                       </CardContent>
                   </Card>
               </Grid>
                       
   
   
           <Grid item xs={12} md={6}  >
               <div className="add-service p-5" >
                   <h5 className='text-white '>PLEASE COMFIRM YOUR ORDER</h5>
                   <form onSubmit={handleSubmit(onSubmit)}>
                       <input readOnly  defaultValue={user.displayName}  {...register("name",   )}  placeholder='Your Name'/>
                       <input readOnly  defaultValue={user.email} {...register("email", )}  placeholder='Your Email'/>
                       <input  type="text" {...register("adress", )}  placeholder='Your Adress'/>
                       <input  type="text" {...register("city", )}  placeholder='Your City'/>
                       <input  type="text" {...register("phone number", )}  placeholder='Your Phone Number'/>
                       
                       <input  className='bg-warning text-dark fw-bold' type="submit" value='Confirm Your Order' />               
                   
                       {/* <Link to='/myorder' style={{width:'100%'}}>
                       <input  className='bg-warning text-dark fw-bold addSeervice' type="submit" value='Confirm Your Order' />               
                       </Link> */}
                   </form>
   
                   
               </div>
          </Grid> 
           
       </Grid>
   </Container>)
       }
     

    
            
            
        </div>
    );
};

export default Orders;
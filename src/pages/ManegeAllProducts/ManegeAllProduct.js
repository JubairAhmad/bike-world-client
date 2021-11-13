import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const ManegeAllProduct = (props) => {
    const [services,setServices]=useState([])
    const {name, description,img, price, duration, _id}=props.service
const service=props.service
    


 


    const handleDelete=(id)=>{
        console.log(id);
        const confirmation = window.confirm("Are you sure to delete!!");
        if (confirmation) {
          fetch(`https://mysterious-wave-37002.herokuapp.com/services/${id}`,{
              method:"DELETE",
          })
         .then(res=>res.json())
              .then(data => {
                  console.log(data)
                if (data.deletedCount >0) {
                  const remaining= services.filter(service=>service._id !==id)
                 setServices(remaining)
                }
                else{
                  alert('Someting Wrong')
                }
              })
         
      }
     }


    return (
        <div>
           <Grid item xs={4} sm={4} md={4} className='mb-5' >
            <Card sx={{ minWidth: 275,  border: 0, boxShadow: 0  }} >
                 <CardMedia
                    component="img"
                    style={{ height:'250px', margin:"0 auto"}}
                    image={img}
                    alt="green iguana"
                    />
                
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{color:'balck'}}>
                        {name}
                        </Typography>
                        
                        <Typography variant="body2" color="text.white" sx={{color:'balck'}}>
                        {description.slice(0,120)}
                         </Typography>
                    
                        <Typography variant="h5" color="text.white" sx={{color:'balck'}} className='d-flex mb-3 justify-content-evenly'>
                        <spam className='text-dark'>{duration}days</spam> <span className='text-dark'>{price}$</span>
                         </Typography>
                        
                        
                           <button onClick={()=>handleDelete(service._id)} className='fw-bold rounded '>Deleted</button>
                        <Link to={``}>
                        <button className='fw-bold rounded '>Update</button>
                        </Link>
                                    

                    

                    </CardContent>
                </Card>
                            
        </Grid>
        </div>
    );
};

export default ManegeAllProduct;


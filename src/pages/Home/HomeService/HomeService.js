import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';


const HomeService = (props) => {
  
const {user}=useAuth()
const {email}=user;

    const {name, description,img, price, duration, _id}=props.service

    const service=props.service

    const addOrders = data => {

      data.email=`${email}`
      delete service._id
      axios.post('https://mysterious-wave-37002.herokuapp.com/orders', data)
        .then(res=>{
            if (res.data.insertedId) {
            }
        })
};

    return (
        <Grid  className='service' item xs={4} md={4}>

<Card sx={{ minWidth: 275 }}>


<CardMedia
        component="img"
        height='250'
        image={img}
        alt="Paella dish"
      />
      <CardContent>
      

        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description.slice(0,100)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Price: {price}$ only
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Delivery on {duration} days
        </Typography>
        <Link to={`/orders/${_id}`}>
                <button onClick={()=>{addOrders(service)}}>Order Now</button>
            </Link>

      </CardContent>
    </Card>

        </Grid>
    );
};

export default HomeService;
import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes,setBikes]=useState([])

    useEffect(()=>{
        fetch('https://mysterious-wave-37002.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setBikes(data))
    },[])
    return (
        <Container>
             <Box sx={{ flexGrow: 1 , m:3}}>

             <Typography sx={{ fontSize: 35, fontWeight: 900, m:2 }} color="dark" gutterBottom>
               Our Coooooolest Bikes
               <hr />
            </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            bikes.map(bike=> <Bike
            key={bike.name}
            bike={bike}
            ></Bike>)
        }
      </Grid>
    </Box>
        </Container>
    );
};

export default Bikes;
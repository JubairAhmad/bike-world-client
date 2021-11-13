import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ManegeAllProduct from './ManegeAllProduct';

const ManegeAllProducts = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('https://mysterious-wave-37002.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])



    return (
       
     <Box sx={{ flexGrow: 1 }}>
            
            <Container sx={{mt:4}} >
            <Typography variant="h4" component="div"  sx={{mt:2,mb:8, fontWeight:'500'}}>
                    Our Products
                 </Typography>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <ManegeAllProduct
                        key={service.id}
                        service={service}
                        
                    ></ManegeAllProduct>)
                }
                    
                
            </Grid>
            
        </Container>

       </Box> 



        
    );
};

export default ManegeAllProducts;




import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] =useState([])
    useEffect(()=>{
        fetch('https://mysterious-wave-37002.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReviews(data)
        })
    },[])
    






    return (
        <div className='review'>
          
   <h2>Reviews of our Clients</h2>
            {
                reviews.map(review=> <div
                    key={review._id}
                >
   <div > 
       <Card  >
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {review.name}
      </Typography>
      
      <Typography variant="body2">
          {review.review}
        <br />
        {'"a benevolent smile"'}
      </Typography>
      <Rating name="read-only" value={review.rate} readOnly />
    </CardContent>
  </Card></div>
                
 </div>)
            }

        </div>
    );
};

export default Reviews;
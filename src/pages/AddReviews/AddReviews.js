import axios from 'axios';
import { useForm } from "react-hook-form";




const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();







  const onSubmit = data => {

      axios.post('https://mysterious-wave-37002.herokuapp.com/reviews', data)
        .then(res=>{
            if (res.data.insertedId) {
                alert('review, database a gece mama...akhon chil koro!!!')
                reset()
            }
        })
};


    return (
    <div>
        <div className='add-service mt-3'>
      
        <h1 className='text-center'>Add New product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 50 })} placeholder='Enter Your Name'  />
          <textarea {...register("review", )} placeholder='Enter Your precious review' />
          <input type="number" {...register("rate",)} placeholder='Give us a rate, out of 5 !'/>
          <input type="submit" />
      </form>
  </div>


        


    </div>
    );
};

export default AddReviews
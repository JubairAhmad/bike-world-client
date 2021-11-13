import axios from 'axios';
import { useForm } from "react-hook-form";
import ManegeAllProducts from '../ManegeAllProducts/ManegeAllProducts';
import "./AddProducts.css"




const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();







  const onSubmit = data => {

      axios.post('https://mysterious-wave-37002.herokuapp.com/products', data)
        .then(res=>{
            if (res.data.insertedId) {
                alert('data, database a gece mama...akhon chil koro!!!')
                reset()
            }
        })
};


    return (
    <div>
        <div className='add-service mt-3'>
      
        <h1 className='text-center'>Add New product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name'  />
          <textarea {...register("description", )} placeholder='Description' />
          <input type="number" {...register("price")} placeholder='Price'/>
          <input type="number" {...register("duration")} placeholder='Delivery Time'/>
          <input {...register("img", )} placeholder='Image Url'/>
          <input type="submit" />
      </form>
  </div>


        <ManegeAllProducts></ManegeAllProducts>



    </div>
    );
};

export default AddProducts
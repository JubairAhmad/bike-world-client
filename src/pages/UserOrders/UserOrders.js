import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../Hooks/useAuth';

const UserOrders = () => {
    const { user, token } = useAuth();
    const [userOrders, setUserOrders] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)

    useEffect(() => {
        const url = `https://mysterious-wave-37002.herokuapp.com/orders`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserOrders(data)
            });
    }, [])

   const handleDelete=(id)=>{
        // console.log(id);
        const confirmation = window.confirm("Are you sure to delete!!");
        if (confirmation) {
            fetch(`https://mysterious-wave-37002.herokuapp.com/userordersdelete/${id}`,{
                method:"DELETE",
            })
           .then(res=>res.json())
                .then(data => {
                    if (data.deletedCount) {
                        console.log(data.deletedCount);
                        setIsDeleted(true)
                    }
                    else {
                        setIsDeleted(false)
                        alert("Something went wrong!!");
                    }
                    
                })
           
            }
        } 


    



    return (
        <div>
            <h2>User Order: {userOrders.length}</h2>
            <TableContainer className='container' component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User Email</TableCell>
                            <TableCell>User Id</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Product Id</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell  scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right"> <img width='100px' src={row.img}/> </TableCell>
                                <TableCell align="right"> <button onClick={()=>{handleDelete(row._id)}}  className='fw-bold rounded '> Cancle Order </button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserOrders;
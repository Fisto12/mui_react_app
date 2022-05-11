import React, { useState } from 'react'
import './productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline } from '@mui/icons-material';
import { productsRows } from '../../components/dummyData';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [data,setData]=useState(productsRows)
    const handleDelete = (id)=>{
        setData(data.filter(items=>items.id!==id))
 }
 const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 130,renderCell:(params)=>(
        <div className='productlistimg'>
            <img  className='userrimmg'src={params.row.img} alt="img" />
            {params.row.name}
        </div>
    ) },
    { field: 'stock', headerName: 'Stock', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'prize',
      headerName: 'Prize',
      width: 160,
     
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>(
        <>
        <Link to={'/product/'+params.row.id}>
        <button className='productlistedit'>Edit</button>
        </Link>
        <DeleteOutline onClick={()=>handleDelete(params.row.id)} className='productlistdelete'/>
        </>
     
      )
     
    },
  ];
  return (
    <div className='product'>
           <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

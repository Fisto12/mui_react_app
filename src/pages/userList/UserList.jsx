import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './UserList.css'
import {DeleteOutline } from '@mui/icons-material';
import { useRows } from '../../components/dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data,setData]=useState(useRows);
  const handleDelete = (id)=>{
         setData(data.filter(items=>items.id!==id))
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Usename', width: 130,renderCell:(params)=>(
            <div className='userinf'>
                <img  className='userrimmg'src={params.row.avatar} alt="img" />
                {params.row.name}
            </div>
        ) },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction volume',
          width: 160,
         
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>(
            <>
            <Link to={'/user/'+params.row.id}>
            <button className='userlistedit'>Edit</button>
            </Link>
            <DeleteOutline onClick={()=>handleDelete(params.row.id)} className='userdel'/>
            </>
         
          )
         
        },
      ];
      
    
  return (
    <div className='user'>
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

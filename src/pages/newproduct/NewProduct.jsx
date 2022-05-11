import React from 'react'
import './newproduct.css'
export default function NewProduct() {
  return (
    <div className='newproduct'>
         <h1 className="newusertitle">New Product</h1>
         <form className="newpdateproduct">
             <div className="addproductitem">
                 <label >Image</label>
                 <input type="file" id='file' />
             </div>
             <div className="addproductitem">
                 <label>Name</label>
                 <input type="text" placeholder='john' />
             </div>
             <div className="addproductitem">
                 <label>Stock</label>
                 <input type="text" placeholder='123' />
             </div>
             <div className="addproductitem">
                 <label>Active</label>
                 <select name="active" id="active">
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                 </select>
             </div>
             <button className="addprodbutton">Create</button>
         </form>
        
       
    </div>
  )
}

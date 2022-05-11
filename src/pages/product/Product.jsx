import { Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../../components/dummyData'
import Chart from '../../components/featuredInfo/chart/Chart'
import './product.css'


export default function Product() {
  return (
    <div className='product'>
       <div className="producttitlecontainer">
            <h1 className="producttitle">Product</h1>
            <Link to='/newProduct'>
            <button className="productaddbutton">Create</button>
            </Link>
          
        </div> 
        <div className="producttop">
          <div className="producttopleft"> 
           <Chart data={productData} dataKey='Sales' title='Sales performance' />
          </div>
          <div className="producttopright">
            <div className="productinfotop">
              <img src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/F/149068_1631763341.jpg" alt="" className="productinfoimage" />
              <span className="productname">Apple airpod</span>
            </div>
            <div className="productinfobottom">
            <div className="productinfoItem">
                <span className="productinfokey">id:</span>
                <span className="productinfovolume">123</span>
              </div>
              <div className="productinfoItem">
                <span className="productinfokey">sales:</span>
                <span className="productinfovolume">$123</span>
              </div>
              <div className="productinfoItem">
                <span className="productinfokey">active:</span>
                <span className="productinfovolume">123</span>
              </div>
              <div className="productinfoItem">
                <span className="productinfokey">in stock:</span>
                <span className="productinfovolume">null</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productbottom">
             <form className="productform">
                <div className="productformleft">
                  <label> Product name</label>
                  <input type="text" placeholder='Apple Airpod' />
                  <label>In stock</label>
                   <select name="instock" id="instock">
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                   </select>
                   <label>Active</label>
                   <select name="active" id="active">
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                   </select>
                </div>
                <div className="productformright">
                  <div className="productupload">
                  <img src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/F/149068_1631763341.jpg" alt="product" className="productinfoimage" />
                  <label for="file">
                  <Publish/>
                  </label>
                    <input type="file" id='file' style={{display:'none'}} />
                  </div>
                  <button className="productbutton">Update</button>

                </div>
             </form>
        </div>
    </div>
  )
}

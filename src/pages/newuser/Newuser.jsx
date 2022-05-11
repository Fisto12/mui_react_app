import React from 'react'
import './newuser.css'
export default function Newuser() {
  return (
    <div className='newuser'>
        <h1 className="newusertitle">New user</h1>
        <form className="newuserform">
            <div className="newuserformitem">
                <label>Username</label>
                <input type="text" placeholder='John' />
            </div>
            <div className="newuserformitem">
                <label>Full Name</label>
                <input type="text" placeholder='John Smith' />
            </div>
            <div className="newuserformitem">
                <label>Email</label>
                <input type="email" placeholder='John@gmail.com' />
            </div>
            <div className="newuserformitem">
                <label>Password</label>
                <input type="password" placeholder='****' />
            </div>
            <div className="newuserformitem">
                <label>Phone</label>
                <input type="text" placeholder='07067796826' />
            </div>
            <div className="newuserformitem">
                <label>Address</label>
                <input type="text" placeholder='New york USA' />
            </div>
            <div className="newuserformitem">
                <div className="newusergender">
                <label>Gender</label>
                <input type="radio" name='gender' id='male' value='male' />
                <label for='male'>Male</label>
                <input type="radio" name='gender' id='female' value='female' />
                <label for='female'>Female</label>
                <input type="radio" name='gender' id='other' value='other' />
                <label for='other'>Other</label>
                </div>
            </div>
            <div className="newuserformitem">
                <label>Active</label>
                <select className='newuserselect' name='active' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newuserbtn">Create</button>
        </form>
    </div>
  )
}

import './Sidebar.css'
import React from 'react'
import {LineStyle,Timeline,TrendingUp,People, ProductionQuantityLimits, ReportProblem, Mail, Feedback, Message} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarmenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarlist">
            <li className="sidebarlistitem active">
                <LineStyle className='sidebaricon'/>
                Home
            </li>
            <li className="sidebarlistitem">
                <Timeline className='sidebaricon'/>
                Analytics
            </li>
            <li className="sidebarlistitem">
                <TrendingUp className='sidebaricon'/>
                Sales
            </li>
        </ul>
       </div>
       <div className="sidebarmenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarlist">
          <Link  to='/user' className='link'>
            <li className="sidebarlistitem ">
                <People className='sidebaricon'/>
                Users
            </li>
            </Link>
            <Link to='/product' className='link'>
            <li className="sidebarlistitem ">
                <ProductionQuantityLimits className='sidebaricon'/>
                Products
            </li>
            </Link>
            <li className="sidebarlistitem ">
                <Timeline className='sidebaricon'/>
                Transaction
            </li>
            <li className="sidebarlistitem">
                <ReportProblem className='sidebaricon'/>
                Reports
            </li>
        </ul>
       </div>
       <div className="sidebarmenu">
        <h3 className="sidebarTitle">Notification</h3>
        <ul className="sidebarlist">
            <li className="sidebarlistitem ">
                <Mail className='sidebaricon'/>
                Mail
            </li>
            <li className="sidebarlistitem">
                <Feedback className='sidebaricon'/>
                Feedbacks
            </li>
            <li className="sidebarlistitem">
                <Message className='sidebaricon'/>
                Messages
            </li>
        </ul>
       </div>
       <div className="sidebarmenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarlist">
            <li className="sidebarlistitem ">
                <LineStyle className='sidebaricon'/>
                Manage
            </li>
            <li className="sidebarlistitem">
                <Timeline className='sidebaricon'/>
                Analytics
            </li>
            <li className="sidebarlistitem">
                <TrendingUp className='sidebaricon'/>
                Reports
            </li>
        </ul>
       </div>
      </div> 
    </div>
  )
}

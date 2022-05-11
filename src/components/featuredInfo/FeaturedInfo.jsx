import './FeaturedInfo.css'
import React from 'react'
import { ArrowDownwardSharp, ArrowUpwardSharp } from '@mui/icons-material'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredtitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredmoney">$2,1455</span>
                <span className="featuredmoneyrate">-11.4 <ArrowDownwardSharp className='featuredIcon negative'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredtitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredmoney">$2,1455</span>
                <span className="featuredmoneyrate">-1.4 <ArrowDownwardSharp className='featuredIcon negative'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredtitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredmoney">$2,225</span>
                <span className="featuredmoneyrate">+2.4 <ArrowUpwardSharp className='featuredIcon positive'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
    </div>
  )
}

import React from 'react'
import { userData } from '../../components/dummyData'
import Chart from '../../components/featuredInfo/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Widgetlg from '../../components/Widgetlg/Widgetlg'
import Widgetsm from '../../components/Widgetsm/Widgetsm'
import './home.css'

export default function Home () {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData}title='User Analytics' grid dataKey='Active user'/>
         <div className="homewidget">
             <Widgetsm/>
             <Widgetlg/>
         </div>
    </div>
  )
}

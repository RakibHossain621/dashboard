import React from 'react'
import Banner from '../../section/dashbord/Banner'
import DashboardCard from '../../section/dashbord/DashboardCard'
import MapChart from '../../section/dashbord/MapChart'
import Tables from '../../section/dashbord/Tables'
const page = () => {
  return (
    <div>
     <Banner/>
     <DashboardCard/>
     <MapChart/>
    <Tables/>
    </div>
  )
}

export default page

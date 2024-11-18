import React from 'react'
import Banner from '../../../section/dashbord/Banner'
import BannerSlider from '../../../section/ecomerce/BannerSlider'
import EcormerceCard from '../../../section/ecomerce/EcormerceCard'
import Charts from '../../../section/ecomerce/Charts'
import ProgressDemo from '../../../section/ecomerce/ProgessBar'
const page = () => {
  return (
   <div>
     <div className='flex gap-2'>
      <div className='w-[80%]'>
      <Banner/>
      </div>
     <div className='w-[20%]'>
     <BannerSlider/>
     </div>
    </div>
    <EcormerceCard/>
    <Charts/>
    <ProgressDemo/>
   </div>
  )
}

export default page

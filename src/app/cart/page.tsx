import React from 'react'
import Cart from './cart'
import Sut from '../components/suprt'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Cartage = () => {
  return (
    <div>
      <Hero name="Cart" category="Cart"/>
        <Cart/>
        <div className='bgA max-w-[1440px] h-[270px] grid grid-cols-4  content-center pt-[50px] pl-[70px]'>
            <Sut Icons="ac1.svg" achievement="High Quality" achievementL="crafted from top materials"/>


            <Sut Icons="ac3.svg" achievement="Warranty Protection" achievementL="Over 2 years"/>

            <Sut Icons="ac4.svg" achievement="Free Shipping" achievementL="Order over 150 $"/>

            <Sut Icons="ac2.svg" achievement="24 / 7 Support" achievementL="Dedicated support"/>
        </div>
        <Footer/> 
    </div>
  )
}

export default Cartage
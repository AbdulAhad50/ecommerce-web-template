"use client"
import React, { useEffect, useState } from 'react'
import Shop from './shop'
import Card from '../components/card'

import Sut from '../components/suprt';


const pageShop = () => {

  let [bg, setBg] = useState(false)
  let [bg2, setBg2] = useState(true)
  let [bg3, setBg3] = useState(true)

  function color(){
    if(bg){
      setBg(false)
      setBg2(true)
      setBg3(true)
    }else{
      setBg(true)
    }
  }
  function color2(){
    if(bg2){
      setBg2(false)
      setBg(true)
      setBg3(true)
    }else{
      setBg2(true)
      
    }
  }

  function color3(){
    if(bg3){
      setBg3(false)
      setBg(true)
      setBg2(true)
    }else{
      setBg3(true)
    }
  }


  useEffect(()=>{

  },[bg3,bg2,bg])


  return (
    <div>
        <Shop/>

        <div className='mt-[20px] px-[100px] gap-[70px] grid grid-cols-3 grid-rows-4'>
            <Card productName="Sofa " image="image2.svg" price="400000" discount="Rs.20000" description="This is Sofa" bg="bg-red-500" text="-30%" className="col-start-1" />

            <Card productName="Sofa " image="image4.svg" price="400000" discount="Rs.20000" description="This is Sofa" bg=" "className="col-start-1"/>

            <Card productName="Sofa " image="image3.svg" price="400000" discount="Rs.20000" description="This is Sofa" bg="bg-blue-500" className="col-start-1" text="new"/>
            <Card productName="Sofa " image="image1.svg" price="400000" discount="Rs.20000" description="This is Sofa" bg="bg-red-500" text="-30%" className="col-start-1" />

            <Card productName="Sofa "  price="400000" discount="Rs.20000" image="image3.svg" description="This is Sofa" bg=" "className="col-start-1"/>

            <Card productName="Sofa " price="400000" discount="Rs.20000" image="image4.svg" description="This is Sofa"  bg="bg-blue-500" className="col-start-1" text="new"/>
            <Card productName="Sofa " price="400000" discount="Rs.20000" image="image2.svg" description="This is Sofa"  bg="bg-red-500" text="-30%" className="col-start-1" />

            <Card productName="Sofa " price="400000" discount="Rs.20000" image="image3.svg" description="This is Sofa"  bg=" "className="col-start-1"/>

            <Card productName="Sofa " price="400000" discount="Rs.20000" image="image4.svg" description="This is Sofa" bg="bg-blue-500" className="col-start-1" text="new"/>
            <Card productName="Sofa " price="400000" discount="Rs.20000" image="image1.svg" description="This is Sofa" bg="bg-red-500" text="-30%" className="col-start-1" />

            <Card productName="Sofa " price="400000" discount="Rs.20000" description="This is Sofa" image="image3.svg" bg=" "className="col-start-1"/>

            <Card productName="Sofa " price="400000" discount="Rs.20000" description="This is Sofa" bg="bg-blue-500" className="col-start-1" text="new" image="image1.svg"/>



        </div>


        <div className='flex justify-center text-center mt-[50px] mx-[auto] gap-[38px] w-[392px] h-[90px] p-[30px] mb-[100px]'>
            <button className={`${bg? "bg-pink-100" : "bg-yellow-600"}  w-[60px] h-[60px] rounded-[10px]`} onClick={color}>
                  1
            </button>

            <button className={`${bg2? "bg-pink-100" : "bg-yellow-600"}  w-[60px] h-[60px] rounded-[10px]`} onClick={color2}>
                  2
            </button>

            <button className={`${bg3? "bg-pink-100" : "bg-yellow-600"} w-[60px] h-[60px] rounded-[10px]`} onClick={color3}>
                  3
            </button>

            <button className={`bg-pink-100 w-[60px] h-[60px] rounded-[10px]`}>
                  Next
            </button>
        </div>

        <div className='bgA max-w-[1440px] h-[270px] grid grid-cols-4  content-center pt-[50px] pl-[70px]'>
            <Sut Icons="ac1.svg" achievement="High Quality" achievementL="crafted from top materials"/>


            <Sut Icons="ac3.svg" achievement="Warranty Protection" achievementL="Over 2 years"/>

            <Sut Icons="ac4.svg" achievement="Free Shipping" achievementL="Order over 150 $"/>

            <Sut Icons="ac2.svg" achievement="24 / 7 Support" achievementL="Dedicated support"/>
        </div>

    </div>
  )
}

export default pageShop
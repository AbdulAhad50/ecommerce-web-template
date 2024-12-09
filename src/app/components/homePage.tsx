import React from 'react'
import Furniture from './furniture'
import Card from './card'
import Image from 'next/image'
import Issue from './Issue'
const HomePage = () => {
  return (
    <div>
        <div className="relative flex flex-col max-w-[1440px] h-[716.83px] ">
        <Image src="/main.jpg" alt="main" width={1440} height={716.83} style={{width:"1440px", height:"716.83px"}}/>

        <div className="absolute flex flex-col justify-center w-[643px] h-[443px] top-[153px] right-[25px] hmeImg pl-[30px]">
            <div className="cDiv flex flex-col justify-center gap-[20px]">
              <span className="cdvS">New Arrival</span>
              <h1 className="cdvh1">Discover Our New Collection</h1>
              <p className="cDivp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <button className="cBtn mt-[40px]">BUY NOW</button>
            </div>
        </div>

        <div className="flex flex-col items-center mt-10 ">
            <h1 className="items1h">Browse The Range</h1>
            <p className="itemsP mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="flex px-[100px] gap-[70px]">
               <div className="flex flex-col items-center gap-[10px]">

               <Image src={"/home/home1.svg"} alt={""} width={0} height={0} style={{width:"301px", height:"380px"}}/>
               <span className="itemSpan">Dining</span>
               </div>

               <div className="flex flex-col items-center gap-[10px]">

                <Image src={"/home/home2.svg"} alt={""} width={0} height={0} style={{width:"301px", height:"380px"}}/>
                <span className="itemSpan">Living</span>
               </div>

               <div className="flex flex-col items-center gap-[10px]">

                 <Image src={"/home/home3.svg"} alt={""} width={0} height={0} style={{width:"301px", height:"380px"}}/>
                 <span className="itemSpan">Bedroom</span>
               </div>
            </div>

            
        </div>



        <div className="flex flex-col gap-5 mt-12 px-[100px] mb-[20px]">
          <h3 className="productP">Our Products</h3>
          {/* {bg,text, price, discount, productName, description */}
          <div className="grid grid-cols-3 grid-rows-2 gap-[30px]">
              <Card bg="bg-red-500" text="30%" description="Night lamp"  productName="Syltherine" price="300000" discount="20000" image="image1.svg"/>

              <Card  description="Night lamp" productName="Syltherine" price="300000" discount="20000" image="image2.svg" bg={''} text={''}/>

              <Card bg="bg-red-500" text="30%" description="Night lamp"  productName="Syltherine" price="300000" discount="20000" image="image3.svg"/>

              <Card  description="Night lamp" productName="Syltherine" price="300000" discount="20000" image="image4.svg" bg={''} text={''}/>

              <Card bg="bg-red-500" text="30%" description="Night lamp"  productName="Syltherine" price="300000" discount="20000" image="image1.svg"/>

              <Card bg="bg-blue-500" text="new" description="Minimalist flower pot"  productName="Pingky" price="50000" discount="20000" image="image2.svg"/>
          </div>

          <button className="productBtn mt-[16] mx-[auto] flex justify-center items-center mb-10">Show More</button>
        </div>

        <Issue/>

        <Furniture/>
    </div>
    </div>
  )
}

export default HomePage
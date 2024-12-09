import React from 'react'
import {Hero} from '../components/Hero'
import Image from 'next/image'

const Shop = () => {
  return (
    <div className='m-w-[1440px]'>
        <Hero name="Shop" category="shop"/>
        <div className='bgFilter mt-[50px] flex items-center justify-between w-[100%] h-[100px] px-[100px]'>
                <div className='flex gap-[18px]'>
                    <Image src="/bar.svg" alt='filter' width={19.05} height={16.67}/>
                    <span className='filterSpan flex items-center'>Filter</span>
                    <Image src="/bar2.svg" alt='bar' width={19.05} height={16.67}/>
                    <Image src="/bar3.svg" alt='bar2' width={19.05} height={16.67}/>

                    <div className='w-[237px] h-[37px] flex items-center'>
                            <h1 className='filterData'>Showing 1-16 of 32 result</h1>
                    </div>  
                </div>

                <div className='flex gap-[10px] -pl-[70px] items-center'>
                    <div className='w-[126px] gap-[10px] h-[55px] flex items-center'>
                        <span className=''>
                            Show
                        </span>

                        <span className='bg-white flex justify-center items-center w-[35px] h-[35px] fontSize'>
                            16
                        </span>
                    </div>

                    <div className='w-[208px]  h-[55px] gap-[10px] flex items-center'>
                        <span className=''>
                            Short by
                        </span>

                        <span className='bg-white flex justify-center items-center w-[120px] h-[35px] fontSize2'>
                            Default
                        </span>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Shop
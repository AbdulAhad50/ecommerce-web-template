import React from 'react'
import { BiStrikethrough } from 'react-icons/bi'

const Card = ({bg,text, price, discount, productName, description, image}:any) => {
  return (
    <div className='relative w-[285px] h-[446px]'>
        <div className='flex relatives w-[285px] h-[301px]'> 

            <img src={`/card/${image}`} alt="" className='imgCard'/>
            <div className={`text-white absolute disc flex justify-center items-center ${bg}`}>
                {text}
            </div>
        </div>  

        <div className='flex flex-col justify-center pl-[10px] gap-[10px] w-[285px] h-[145px] bgcol'>
                <h2 className='cardName'>{productName}</h2>
                <p className='description'>{description}</p>
                <p className='cardName'>{price}<s className='description'>{discount}</s> </p>
        </div>
    </div>
  )
}

export default Card
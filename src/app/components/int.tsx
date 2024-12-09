import React from 'react'

const Int = ({label, place}:any) => {
  return (
    <div className=' flex flex-col gap-3'>
        <label htmlFor="">{label}</label>
        <input type="text" className='intL' />
    </div>
  )
}

export default Int
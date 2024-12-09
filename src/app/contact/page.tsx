import React from 'react'
import Int from '../components/int'
import Hero from '../components/Hero'

const Contact = () => {
  return (
    <>
    <Hero name="Checkout" category="Cart"/>
    <div className='flex justify-between px-[100px] mt-24'>
        <div className='flex flex-col gap-3'>
            <h1>Billing details</h1>
            <br/>
            <div className='flex gap-2'>
              <div className='flex flex-col gap-3'>
                  <label htmlFor="">First Name</label>
                  <input type="text" className='inputC'/>
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor="">Last Name</label>
                <input type="text" className='inputC'/>
              </div>
            </div>

            <Int label="Company Name (Optional)"/>
            <Int label="Country / Region"/>
            <Int label="Street address"/>
            <Int label="Town / City"/>
            <Int label="Province"/> 
            <Int label="ZIP code"/> 
            <Int label="Email address"/> 
            <br/>
            <Int label="  "/> 
            

        </div>
        <div className='sideCn px-[10px]'>
        <br/>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='cT'>Product</p>
                    <p className='itemT'>Asgaard sofa x 1</p>
                    <p className='subT'>Subtotal</p>
                    <p className='subT'>Total</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='cTR text-right'>SubTotal</p>
                    <p className='itemT'>Rs. 250,000.00</p>
                    <p className='itemT'>Rs. 250,000.00</p>
                    <p className='tC'>Rs. 250,000.00</p>
                </div>
                
                
                
            </div>
           

            <div className='flex flex-col gap-4'>
                      <ul className='ml-4'>
                        <li className='discT'>Direct Bank Transfer</li>
                      </ul>

                      <p className='cnC'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      <div className='flex gap-1' >
                        
                          <input type="radio" name='cash' id='cash'/><label htmlFor="cash" className='typayment' id='cash'>Direct Bank Transfer</label>
                      </div>
                        
                      <div className='flex gap-1'>

                      <input type="radio" name='cash' id='cash'/><label htmlFor="cash" className='typayment' id='cash'>Cash n Delivery</label>
                     </div>

                      <p className='privacy'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='privacyS'>privacy policy.</span></p>
                      
                      <button className='btnB mx-[auto] mt-4'>Place Order</button>
                </div>

        </div>
    </div>
    </>
  )
}

export default Contact
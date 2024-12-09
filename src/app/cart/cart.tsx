import Image from "next/image"
import { FaTrash } from "react-icons/fa";
import Hero from "../components/Hero";




const Cart = () => {
  return (

    <>
    
    <div  className="flex max-w-[1440px] gap-[25px] mt-32  h-[525px] pl-[100px] pr-[30px]">
        <div className='flex flex-col '>
        <div className='flex  justify-between gap-[25px] items-center px-[60px] cartHeader'>
          <div className='flex justify-between items-center gap-[25px] px-[60px] cartHeader'>
            <div className='flex gap-[20px]'>
                <p className='cartFnt'>Product</p>
                <p className='cartFnt'>Price</p>
            </div>
            
            <div className='flex gap-[20px] items-center'>
                <p className='cartFnt'>Quantity</p>
                <p className='cartFnt'>Subtotal</p>
            </div>

         </div>  
            
         
        
        </div>

        <div className="flex items-center h-[105px] mt-16">
            <Image src={"/home/home1.svg"} alt={"Cart Image"} width={108} height={105}/>

            <div className="flex items-center pl-[20px] gap-[70px] ">
                <p>Asgaard sofa</p>
                <p>Rs. 250,000.00</p>
                <button className="Cbtn">1</button>
                <p>Rs. 250,000.00</p>
                <p><FaTrash className="trash"/></p>

            </div>
        </div>
        
    </div>


            <div className="cardDeatail flex flex-col  gap-7 items-center pt-4">
                <h1 className="cartH1">Cart Totals</h1>
                <br/>
                <br/>
                <br/>
                
                <div className="flex gap-4">
                    <p className="cartD">Subtotal</p>
                    <p className="rsT">Rs. 250,000.00</p>
                </div>
                <br/>
                <div className="flex gap-9">
                    <p className="cartD">Total</p>
                    
                    <p className="totalRs">Rs. 250,000.00</p>
                </div>

                <button className="cartBtn">Check Out</button>
            </div>
    </div>
    </>
  )
}

export default Cart
import Image from "next/image"

const Card = ({bg,text, price,className, discount, productName, description, image}:{bg:string,text:string, price:string, discount:string, productName:string, className:string, description:string, image:string}) => {
  return (
    <div className='relative w-[285px] h-[446px]'>
        <div className='flex relatives w-[285px] h-[301px]'> 

            <Image src={`/card/${image}`} alt="" className='imgCard' width={285} height={0}/>
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
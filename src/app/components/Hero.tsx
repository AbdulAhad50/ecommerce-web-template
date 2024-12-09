import Image from "next/image"
const Hero = ({name,category, image}:any) => {
  return (
    <div className='relatives flex justify-center items-center mt-12 -w-[1440px] h-[316px]'>
        <div className="heroSection flex flex-col items-center justify-center blur-[2px]">
            <img src="/hero.jpg" alt=""  className="img"/>
        </div>

        <div className="absolute flex flex-col justify-center items-center z-10">
              <Image src="/logos.svg" alt="heroSection Logo" width={40} height={20} className=""/>
                <h1 className="heroHeading">{name}</h1>
                <p className="sh">Home {">"} <span className="category">{category}</span></p>
        </div>

       

    </div>
  )
}

export default Hero
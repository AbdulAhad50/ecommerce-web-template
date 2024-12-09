import Image from "next/image";
const Sut = ({achievement,Icons,achievementL}:{achievement:string,Icons:string,achievementL:string}) => {

  return (
    
   
      <div className="flex gap-[10px]">
            <Image 
  src={`/achieve/${Icons}`} 
  alt="achieve" 
  width={42.77} 
  height={55} 
  style={{ width: "42.77px", height: "60px" }} 
/>

            <div className="flex flex-col w-[337px] h-[67px]">
                <span className="achievement">{achievement}</span>
                <p className="achievementp">{achievementL}</p>
            </div>
        </div>
     
  )
}

export default Sut
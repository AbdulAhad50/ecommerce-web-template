import Image from "next/image"
const Issue = () => {
  return (
    <div className="flex items-center justify-between max-w-[1440px] h-[670px] px-[100px] gap-[20px] mb-10">
    <div>
      <div className="flex flex-col w-[422px] h-[151px] gap-[10px]">
        <h1 className="sliderh1 text-black">50+ Beautiful rooms inspiration</h1>
        <p className="sliderP">Our designer already made a lot of beautiful prototypes of rooms that inspire you</p>
      </div>

      <button className="cBtn2 mt-[40px]">EXPLORE NOW</button>
    </div>

    <div className="relative flex items-center ml-[30px]">
      <div className="flex gap-[10px] items-center">
        <div className="relative flex w-[300px] h-[482px]">
          <Image
            src={"/home/home3.svg"}
            alt={"Image of a beautiful bedroom"}
            width={300}
            height={482}
            className="rounded-lg"
          />
          <div className="absolute bottom-[50px] left-0 bg-white p-2 blur-sm">
            <p className="imageInsider">01----- Bed Room</p>
          </div>
        </div>

        <div className="w-[300px] h-[282px]">
          <Image
            src={"/home/home1.svg"}
            alt={"Image of a cozy living room"}
            width={300}
            height={282}
            className="rounded-lg"
          />
        </div>

        <div className="w-[300px] h-[282px]">
          <Image
            src={"/home/home2.svg"}
            alt={"Image of a modern kitchen"}
            width={300}
            height={282}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Issue
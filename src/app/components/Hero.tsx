import Image from "next/image";

interface HeroProps {
  name: string;
  category: string;
}

export const Hero = ({ name, category }: HeroProps) => {
  return (
    <div className='relative flex justify-center items-center mt-12 w-[1440px] h-[316px]'>
      <div className="heroSection flex flex-col items-center justify-center blur-[2px]">
        <Image src="/hero.jpg" alt="Hero Image" className="img" width={0} height={0}/>
      </div>

      <div className="absolute flex flex-col justify-center items-center z-10">
        <Image src="/logos.svg" alt="Hero Section Logo" width={40} height={20} />
        <h1 className="heroHeading">{name}</h1>
        <p className="sh">
          Home {">"} <span className="category">{category}</span>
        </p>
      </div>
    </div>
  );
};

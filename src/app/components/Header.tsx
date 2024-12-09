import { CiHeart } from "react-icons/ci";
import Image from 'next/image'
import { BsPersonExclamation } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
      <header className='flex items-center justify-between m-w-[1440px] h-[100px] px-[100px]'>

        <div className="flex gap-[10px]">
            <Image src="/logos.svg" alt="logo" width={50} height={32}/>
            <h1 className="logoh1">Furniro</h1>
        </div>

        <div className="flex items-center">
          <ul className="flex items-center gap-[30px] ulF">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/shop">Shop</Link></li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-[20px]">
            <li><BsPersonExclamation className="headerIcon"/></li>
            <li><CiSearch className="headerIcon"/></li>
            <li><CiHeart className="headerIcon"/></li>
            <li><Link href={"/cart"}><AiOutlineShoppingCart className="headerIcon"/></Link></li>
          </ul>
        </div>

      </header>
  )
}

export default Header
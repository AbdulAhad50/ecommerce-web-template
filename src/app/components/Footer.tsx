const Footer = () => {
  return (
    <div className='flex flex-col pt-[50px] px-[100px] max-w-[1440px] h-[505px]'>
            <div className='grid grid-cols-4 gap-[30px]'>
                <div className="flex flex-col gap-[50px] w-[285px]">
                    <span className='fh'>Funiro.</span>
                    <ul className='fntF'>
                        <li>400 University Drive <br/> Suite 200  Coral </li>
                        <li>Gables </li>
                        <li>FL 33134 USA</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-[50px] ml-10 w-[285px]">
                    <span className='fntF'>Links</span>

                    <ul className='flex flex-col gap-10 mt-3'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div className="flex flex-col gap-[50px] w-[285px]">
                    <span className='fntF'>Help</span>

                    <ul className='flex flex-col gap-10 mt-3'>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>


                <div className="flex flex-col gap-[50px] w-[285px]">
                    <span className='fntF'>Newsletter</span>

                    <ul className='flex items-center gap-1 mt-3'>
                        <input type="text" placeholder='Enter yur Email Address' className='intB'/>
                        <label htmlFor="" className='intB'>SUBSCRIBE</label>
                    </ul>
                </div>
            </div>
            <div className='flex items-center w-[1100.01px] h-[110px] bdF mt-12'>

            <p className='LcF'>2023 furino. All rights reverved</p>
            </div>
    </div>
  )
}

export default Footer
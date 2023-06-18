import Img from '../../public/images/home/img13.png'
import Image from 'next/image'
export default function ContactUs(){
    return(
        <>
        <div className=' grid grid-flow-row justify-items-center bg-purple text-center mx-auto'>
           
           <Image src={Img} />

        </div>
        <div className='grid grid-flow-row bg-one text-3xl justify-items-center py-24'>
            <h2>به زودی تکمیل می شود</h2>
        </div>
        </>
    )
}
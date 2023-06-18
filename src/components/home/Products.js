import Image from 'next/image'
import Img1 from '../../public/images/home/img13.png'
import Img2 from '../../public/images/home/img14.png'
export default function Products(){
    return(
        <section class="bg-white">
    
        
        <div class="grid grid-cols gap-8  sm:gap-12 md:grid-cols-3 lg:grid-cols-3 py-8 lg:py-8 mx-auto max-w-screen-xl px-4 ">
            <a href="#" class="flex justify-center items-center place-self-center w-1/2">
             <Image src={Img1} alt='' />                       
            </a>
            <a href="#" class="flex justify-center items-center place-self-center w-1/2">
               <Image src={Img2} alt='' />                                              
            </a>
            <a href="#" class="flex justify-center items-center place-self-center w-1/2">
            <Image src={Img1} alt=''/>                                                              
            </a>

           
        </div>
    
</section>
    )
}
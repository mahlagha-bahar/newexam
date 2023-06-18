import Image from "next/image";
import Img from "../../public/images/home/img15.png";
import {motion} from 'framer-motion'



export default function Plans() {
  
 
  const  Variants = {
    offscreen: {
      x: -300
    },
    onscreen: {
      x: 50,
      rotate: 0,
      transition: {
        type: "tween",
        bounce: 0.4,
        duration: 0.8,
        dalay:0.3
      }
    }}
  return (

    
    <div className="bg-graytwo">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12 ">
        <div className="ml-auto  lg:col-span-7 py-16">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold  md:text-3xl xl:text-4xl text-gray">
          آن را به برای خود نشان کنید
          </h1>
          <p className="max-w-2xl mb-6 font-light text-graythree lg:mb-8 md:text-lg lg:text-xl ">دواگزم محصول SaaS است و هر سازمانی را می توان خیلی سریع تهیه کرد. در عین حال از برچسب زدن کامل سفید پشتیبانی می کند و می توانید دامنه و نام تجاری خود را برای سازمان خود اعمال کنید.   </p>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-primarytwo  to-cyan-100 hover:bg-gradient-to-br   font-medium rounded-full text-2xl px-8 py-2.5 text-center"
          >
            بیشتر بدانید
          </button>
        </div>
        <motion.div
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
         animate={{opacity:1, x:0}}
         
         transition={{dalay:0.5}}
        className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={Img} />
        </motion.div>
      </div>
    </div>
  );
}

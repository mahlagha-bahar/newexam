import Img from "../../public/images/home/img1.png";
import Image from "next/image";
import {motion} from 'framer-motion'
const Banner = () => {

  

  return (
    <section className=" bg-gradient-to-r from-primary  to-primaryOne ">
      <div className="grid max-w-screen-xl px-20 pt-8 mx-auto lg:gap-4 xl:gap-0 lg:pt-24 lg:grid-cols-12 ">
        <div className="ml-auto  lg:col-span-7 ">
          <p className="max-w-2xl mb-6  text-white lg:mb-8 md:text-lg lg:text-xl ">
            معرفی سایت
          </p>

          <h1 className="max-w-2xl mb-6 text-3xl text-white font-extrabold   md:text-5xl xl:text-4xl  ">
          یادگیری مبتنی بر ارزشیابی
          </h1>
          <p className="max-w-2xl mb-6  text-white lg:mb-8 md:text-lg lg:text-xl ">
          محصولی چند زبانه برای ساختن، گرفتن، علامت گذاری، ارزیابی و یادگیری
          </p>
          <p className="max-w-2xl mb-6  text-white lg:mb-8 md:text-lg lg:text-xl animate-">
          برای برگزاری امتحانات در مقیاس بزرگ طراحی شده است
          </p>
        </div>
        <motion.div 
          initial={{opacity:0,x:-100,y:0}}
          animate={{opacity:1, x:0}}
          exist={{opacity:0, x:15}}
          transition={{dalay:0.5,duration:1,type:"tween"}}
        className=" lg:mt-0 lg:col-span-5 lg:flex ">
          <Image
         
          src={Img} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

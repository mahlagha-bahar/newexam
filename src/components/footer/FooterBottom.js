import {TfiFacebook} from 'react-icons/tfi'
import {TfiTwitterAlt} from 'react-icons/tfi'
import {RiInstagramFill} from 'react-icons/ri'
export default function FooterBottom() {
  return (
    <footer className="bg-white sm:flex sm:items-center sm:justify-between py-3 sm:py-3 sm:px-8 xl:py-3 xl:px-52 ">
      <p className="text-base text-center text-graythree ">
      © Copyright Notion Wave 2023
       
      </p>
      <div className="flex justify-center items-center space-x-1">
      
        <a
          href="#"
          
          className="inline-flex justify-center px-4 text-graythree cursor-pointer hover:text-orangeone "
        >
         
          <TfiTwitterAlt size={25}/>
        </a>
        <a
          href="#"
          
          className="inline-flex justify-center px-4  text-graythree cursor-pointer  hover:text-orangeone"
        >
         
          <RiInstagramFill size={25}/>
        </a>
        <a
          href="#"
          
          className="inline-flex justify-center px-4 text-graythree cursor-pointer  hover:text-orangeone"
        >
         
          <TfiFacebook size={25}/>
        </a>
       
      </div>
    </footer>
  );
}

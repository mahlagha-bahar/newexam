import Link from "next/link";
import { GrMail } from "react-icons/gr";
import { TfiTwitterAlt } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
export default function MenuTop() {
  return (
    <div className=" bg-primary py-1 lg:py-1 ">
      <div className="md:grid md:grid-cols-4 md:gap-4 md:justify-between  md:items-center md:w-[92%] md:mx-auto  ">
        <div className="md:col-start-1 md:col-end-3 ">
          <div className="lg:flex lg:flex-row  lg:items-center lg:gap-6   hidden ">
            <Link
              className=" text-white hover:text-blue-lavender text-sm font-extrabold"
              href="/about-us"
            >
              درباره ما
            </Link>
            <Link
              className="text-white hover:text-blue-lavender text-sm font-extrabold"
              href="/privacy-policy"
            >
              حریم خصوصی
            </Link>
            <Link
              className="text-white hover:text-blue-lavender text-sm font-extrabold"
              href="/terms-and-conditions"
            >
              شرایط و ضوابط
            </Link>
            <Link
              className="text-white hover:text-blue-lavender text-sm font-extrabold"
              href="/contact-us"
            >
              تماس با ما
            </Link>
          </div>
        </div>

        <div className="md:col-start-4 md:col-span-1 mx-auto ml-0">
          <ul className="inline-block">
            <li className="lg:inline-flex lg:justify-center lg:px-2 lg:text-white lg:cursor-pointer lg:hover:text-blue-lavender hidden">
              <a href="#" className=" md:content-center">
                <TfiTwitterAlt size={15} />
              </a>
            </li>
            <li className=" lg:inline-flex lg:justify-center lg:px-2  lg:text-white lg:cursor-pointer  lg:hover:text-blue-lavender hidden">
              <a href="#" className="lg:content-center">
                <RiInstagramFill size={15} />
              </a>
            </li>
          </ul>
          <a
            href="#"
            className=" md:items-center md:inline-flex md:justify-center md:px-2 text-white md:cursor-pointer  inline-flex justify-center items-center px-32  hover:text-blue-lavender  "
          >
            nwinfo@notionwave.com <GrMail size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

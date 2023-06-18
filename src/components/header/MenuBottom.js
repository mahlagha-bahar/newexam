import Image from "next/image";
import Img from "../../public/images/header/img.png";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
export default function MenuBottom() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(true);
const router =useRouter()
const currenRouter = router.pathname
  return (
    <>
      <div className="bg-white py-4 lg:py-4">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="lg:ml-96">
            <Link href="/">
              <Image className="w-28" src={Img} alt="" />
            </Link>
          </div>
          {searchOpen ? (
            <div
              style={{
               
                
                background: navbarOpen ? "" : "white",
              }}
              className={`${navbarOpen ? "lg:top-[0%] top-[-100%]" :"md:top[15.7%] top-[14%]"} lg:static absolute  lg:bg-white text-gray lg:min-h-fit min-h-[30vh] left-16 right-16 md:w-auto  flex items-center px-5  lg:mr-96`}
            >
              <div className="flex lg:flex-row flex-col lg:items-center  lg:gap-6 gap-8 ">
              <Link
                  className={`${currenRouter === '/question-bank' ? 'active' : 'hover:text-graythree'}  text-lg`}
                  href="/question-bank"
                >
        استودیو آزمون
                </Link>
                <Link
                  className={`${currenRouter === '/exam-maker' ? 'active' : 'hover:text-graythree'}  text-lg`}
                  href="/exam-maker"
                >
                  سازنده آزمون
                </Link>
                <Link className={`${currenRouter === '/student-based-learning' ? 'active' : 'hover:text-graythree'}  text-lg`}
                 href="/student-based-learning">
                  مقیاس بزرگ
                </Link>
                <Link
                  className={`${currenRouter === '/friends-and-groups' ? 'active' : 'hover:text-graythree'}  text-lg`}
                  href="/friends-and-groups"
                >
                  شبکه های احتماعی
                </Link>
              </div>
            </div>
          ) : (
            <form className="flex items-center">
              <label for="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="block w-full p-2 pl-10 text-sm text-graythree   simple-input "
                  placeholder="جستجو..."
                  required=""
                />
              </div>
            </form>
          )}

          <div className="flex items-center gap-6 ml-2">
            {searchOpen ? (
              <GoSearch
                size={20}
                onClick={() => setSearchOpen((prev) => !prev)}
              />
            ) : (
              <button>
                <IoMdClose
                  className="simple"
                  onClick={() => setSearchOpen((prev) => !prev)}
                />
              </button>
            )}

            <FiMenu
              onClick={() => setNavbarOpen((prev) => !prev)}
              className={`cursor-pointer lg:hidden  ${
                searchOpen ? "" : "hidden"
              }`}
              size={20}
            />
          </div>
        </nav>
      </div>
    </>
  );
}

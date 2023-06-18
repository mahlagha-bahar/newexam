import Link from "next/link";
export default function FooterTop(){
    return(
        <footer class=" bg-purpleone sm:flex sm:items-center sm:justify-between py-3 sm:py-3 sm:px-8 xl:py-3 xl:px-52 ">
            
  <div class="md:flex md:justify-center sm:items-center sm:space-x-1 justify-items-center">
     
        <div class="flex flex-wrap justify-center items-center  text-white text-xl ml-auto gap-4">
        <Link
              className=" text-white hover:text-blue-lavender text-base font-extrabold"
              href="/about-us"
            >
              درباره ما
            </Link>
            <Link
              className="text-white hover:text-blue-lavender text-base font-extrabold"
              href="/privacy-policy"
            >
              حریم خصوصی
            </Link>
            <Link
              className="text-white hover:text-blue-lavender text-base font-extrabold"
              href="/terms-and-conditions"
            >
              شرایط و ضوابط
            </Link>
            <Link
              className="text-white hover:text-blue-lavender text-base font-extrabold"
              href="/contact-us"
            >
              تماس با ما
            </Link>
         
      </div>
     
  </div>
  <div className=""></div>
</footer>
    )
}
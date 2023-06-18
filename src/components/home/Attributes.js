import Image from "next/image";
import Img2 from "../../public/images/home/img2.png";
import Img9 from "../../public/images/home/img9.png";
import Img10 from "../../public/images/home/img10.png";
import Img11 from "../../public/images/home/img11.png";
import Img12 from "../../public/images/home/img12.png";
const Attributes = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white">
      <div className="mr-auto place-self-center lg:col-span-7">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray ">
              آنچه هست و نیست
            </h2>
            <p className=" mb-4 text-graythree  text-xl">
              دواگزم یک پلت فرم در حال ارزیابی است که به شما امکان می دهد ایجاد
              کنید، بسازید و امتحان دهید و از نتیجه استفاده کنید تا مشخص کنید
              دانش آموز به چه چیزی نیاز دارد تا بیشتر بر روی آن تمرکز کند و یاد
              بگیرد. بنابراین گامی به سوی یادگیری دانش آموزی است.
            </p>
            <p className=" mb-4 text-graythree text-xl">
              این سایت سازنده آزمون مبتنی بر ابر شما است. ارائه به همه سازمان ها
              در هر اندازه ای اجازه می دهد تا از این پلت فرم استفاده کنند.
            </p>
            <p className=" mb-4 text-graythree text-xl">
              قادر به برگزاری امتحانات در مقیاس های بزرگ ده ها هزار شرکت کننده
              است.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-16 lg:w-16 ">
                <Image src={Img9} alt="" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray">
                مقیاس های بزرگ
              </h3>
              <p className="text-graythree text-lg">
                داشتن توانایی برگزاری آزمون در مقیاس ده ها هزار شرکت کننده،
                محصول را بسیار منحصر به فرد می کند
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-16 lg:w-16 ">
                <Image src={Img10} alt="" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray">آزمون ساز</h3>
              <p className="text-graythree text-lg">
                از سوالات خود برای طراحی امتحانات با DoExam استفاده کنید. همه به
                طور خودکار در امتحانات شرکت کنید، علامت گذاری کنید و گزارش ها را
                نشان دهید
              </p>
            </div>

            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-16 lg:w-16 ">
                <Image src={Img11} alt="" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray">
                گزارش های تفصیلی
              </h3>
              <p className="text-graythree text-lg ">
                انواع مختلف گزارش ها به سازمان دهندگان و دانش آموزان اجازه می
                دهد تا خود را با سایر گروه ها و همسالان مقایسه کنند.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-16 lg:w-16">
                <Image src={Img12} alt="" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray">
                دوستان و گروه ها
              </h3>
              <p className="text-graythree text-lg">
                اینجا مفهوم کلاس درس نیست. معلمان می توانند گروه هایی از دانش
                آموزان ایجاد کنند تا سطح پیشرفت آنها را منعکس کنند. ساختار سلسله
                مراتبی گروه ها به مؤسسات آموزشی اجازه می دهد تا از گروه ها برای
                انعکاس ساختار خود استفاده کنند
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image src={Img2} alt="" />
      </div>
    </div>
  );
};
export default Attributes;

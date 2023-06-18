import Accordion from "./Accordion";
import Img3 from "../../public/images/home/img3.png";
import Img4 from "../../public/images/home/img4.png";
import Img5 from "../../public/images/home/img5.png";
import Img6 from "../../public/images/home/img6.png";
import Img7 from "../../public/images/home/img7.png";
import Img8 from "../../public/images/home/img8.png";

import Image from "next/image";
function Uses() {
  return (
    <div className="bg-graytwo py-16 sm:py-16">
      <div className=" px-4 mx-auto max-w-screen-xl  lg:px-6 ">
        <div className="mx-auto mb-8 lg:mb-16 ">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray text-center ">
            برای چه کسانی کاربرد دارد؟
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-16 md:space-y-0">
          <div className="flex flex-col items-center pb-10 text-justify ">
            <div className="  mb-3 max-w-sm  ">
              <Image className="w-72 h-72   " src={Img3} alt="" />
            </div>

            <Accordion
              title="آموزش و پرورش"
              content="وزارتخانه های آموزش و پرورش، هیئت مدیره مدارس و به طور کلی معلمان همیشه شرکای اصلی ما هستند. دواگزم یک دستیار خوب برای معلمان است. آنها می توانند سؤالات و پاسخ ها را جمع آوری کنند و آنها را به بانک سؤالات شما اضافه کنند، در امتحانات آنلاین از دانش آموزان شرکت کنند. اکثر امتحانات به صورت خودکار علامت گذاری می شوند. دریافت گزارش و نظارت بر پیشرفت گروه هایی از دانش آموزان بسازید و بر نیازهای آموزشی هر گروه تمرکز کنید."
            />
          </div>
          <div className="flex flex-col items-center pb-10 bg">
            <div className="  mb-3 max-w-sm  ">
              <Image className="w-72 h-72  " src={Img4} alt="" />
            </div>

            <Accordion
              title="سیستم یادگیری"
              content="اگر سیستم‌های مدیریت یادگیری را به مدارس، کالج‌ها و دانشگاه‌ها یا حتی شرکت‌ها ارائه می‌دهید، ما می‌توانیم محصول شما را با یکپارچه‌سازی دواگزم ارتقا دهیم. ما از روش های مختلف یکپارچه سازی با سیستم های LMS موجود پشتیبانی می کنیم. قابلیت های LTI و SSO ادغام ها را تسهیل می کند"
            />
          </div>
          <div className="flex flex-col items-center pb-10">
            <div className="  mb-3 max-w-sm  ">
              <Image className="w-72 h-72  " src={Img5} alt="" />
            </div>

            <Accordion
              title="ناشرکتب درسی"
              content="اگر کتاب‌های درسی چاپی منتشر می‌کنید، می‌توانید کتاب‌های خود را با تولید ارزشیابی و تست از موضوعات و فصول در دواگزم تکمیل کنید. اگر شما یک ناشر کتاب دیجیتال هستید، از شما دعوت می کنیم که دواگزم را در کتاب های درسی خود ادغام کنید و کیفیت کتاب های خود را افزایش دهید. دواگزم از هر دو زبان از چپ به راست و از راست به چپ پشتیبانی می کند. اگر صاحب بانک های آزمایشی هستید و منتشر می کنید، از شما دعوت می کنیم با ما همکاری کنید. دروازه تجارت امن ما به شما امکان می دهد از خدمات خود درآمد کسب کنید."
            />
          </div>
          <div className="flex flex-col items-center pb-10">
            <div className="  mb-3 max-w-sm  ">
              <Image className="w-72 h-72  " src={Img6} alt="" />
            </div>

            <Accordion
              title="دانش آموز و والدین"
              content="والدین دانش‌آموزان K12 می‌توانند با مشاهده نتایج امتحانات و پیشرفت فرزندان خود در امر آموزش مشارکت کنند. اکثر امتحانات به صورت خودکار علامت گذاری می شوند و والدین و دانش آموزان گزارش دقیقی دریافت خواهند کرد. سپس می توانید به کودک خود کمک کنید تا روی جایی که باید پیشرفت کند تمرکز کند. ابزار شبکه اجتماعی تعبیه شده ما یک تسهیلات بسیار امن است که به دانش آموزان اجازه می دهد با دوستان خود مطالعه کنند."
            />
          </div>
          <div className="flex flex-col items-center pb-10">
            <div className="  mb-3 max-w-sm  ">
              <Image className="w-72 h-72 " src={Img7} alt="" />
            </div>

            <Accordion title="آزمون های ملی" content="آزمون‌های خروجی، آزمون‌های استاندارد، آزمون‌های ورودی دانشگاه و هر آزمونی در مقیاس بزرگ را می‌توان بهتر برای دواگزم آماده کرد. دواگزم می‌تواند بانک‌های سؤالات بزرگ، جمعیت بسیار زیاد آزمون‌دهنده را مدیریت کند و بسیار بسیار سریع است. بسیار امن است. داوطلبان ممکن است از آن برای تمرین واقعی استفاده کنند." />
          </div>
          <div className="flex flex-col items-center pb-10">
            <div className="  mb-3 max-w-sm  ">
              <Image className=" w-72 h-72 " src={Img8} alt="" />
            </div>

            <Accordion title="جوامع منظم" content="افرادی که در زمینه های تنظیم شده کار می کنند به طور مداوم از طریق آزمون های موضوعی ویژه ارزیابی می شوند. انجمن‌ها و انجمن‌های حرفه‌ای می‌توانند سؤالات خود را به بانک سؤالات دواگزم اضافه کنند و آزمون‌هایی ایجاد کنند و به طور خودکار آنها را درجه‌بندی کنند. افراد حرفه ای مانند پزشکان، دندانپزشکان و پرستاران می توانند از دواگزم برای تمرین امتحانات و یادگیری استفاده کنند." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uses;

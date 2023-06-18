export default function JoinUs() {
  return (
    <div className="bg-gradient-to-t from-orangeone from-0.01% via-primary via-30% to-primary t0-100%">
      <div className="py-8 lg:py-32 px-2 mx-auto max-w-xl">
        <h2 className="mb-8 text-3xl tracking-tight font-extrabold text-center text-white">
        به روز رسانی های فوری!
        </h2>
       
        <form action="#" className="space-y-4">
        
            
            <input
           
              type="text"
              id="subject"
              className=" p-3 w-full text-xl text-graythree bg-gray-50 rounded-full border border-orange  "
              placeholder="نام"
              required
            />
         
            
            <input
              type="email"
              id="email"
              className=" p-3 w-full text-xl text-graythree bg-gray-50 rounded-full  border border-orange "
              placeholder="ایمیل"
              required
            />
          
          
         
          <button
            type="submit"
            className=" py-px px-3 w-full text-xl text-white bg-orange rounded-full  shadow-lg shadow-zinc-50" 
          >
           به لیست پستی بپیوندید
          </button>
        </form>
      </div>
    </div>
  );
}

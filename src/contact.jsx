import React from "react";
const Contact = () => {
  return (
    <div>
      <div className="h-[563px] bg-slate-100 mx-10 mt-6 text-center ">
        <div className="text-4xl mb-4 pt-28">Let's Connect</div>
        <div className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Suspendisse varius enim in eros elementum tristique. Duis
          cursus, mi quis.
        </div>
        <div className="label my-24">
          <div className="icon-label"></div>
          <div className="tag-label">our offices</div>
          <div className="icon-label"></div>
        </div>
      </div>
      <div className="px-[30px]">
        <div className="max-md:w-[85%] md:w-[80%] lg:w-[65%] mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[-100px] ">
            <div>
              <div className="h-[200px] bg-[url('../public/img/stories/str1.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="mt-10 text-center">
                <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[10px]">
                  united kingdom
                </div>
                <div className="text-[18px] mb-[10px] text-gray-700">
                  Canary Wharf, London
                </div>
                <div className="text-[16px] text-gray-500 mb-[10px]">
                  Jubilee Place
                  <br />
                  London
                  <br />
                  E14 5NY
                </div>
                <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mt-[25px] mb-[10px]">
                  opening times
                </div>
                <ul className="text-[16px] text-gray-500 leading-7 ">
                  <li>Mon - Fri 08:00 to 22:00</li>
                  <li>Sat - 09:00 to 20:00</li>
                  <li>Sun - 12:00 to 18:00</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="h-[200px] bg-[url('../public/img/stories/str2.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="mt-10 text-center">
                <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[10px]">
                  united states
                </div>
                <div className="text-[18px] mb-[10px] text-gray-700">
                  Venice Beach, California
                </div>
                <div className="text-[16px] text-gray-500 mb-[10px]">
                  9219 Old Kingston Street South
                  <br />
                  El Monte, CA
                  <br />
                  91733
                </div>
                <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mt-[25px] mb-[10px]">
                  opening times
                </div>
                <ul className="text-[16px] text-gray-500 leading-7 ">
                  <li>Mon - Wed 09:00 to 21:00</li>
                  <li>Thu - Sat 09:00 to 22:00</li>
                  <li>Sun - 10:00 to 19:00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[85%] xl:w-[70%] mx-auto ">
          <div className=" py-[60px] md:p-[60px] md:border flex flex-col lg:flex-row ">
            <div className="left basis-2/3 lg:pr-[60px] max-lg:text-center">
              <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[10px] ">
                contact form
              </div>
              <div className="text-[18px]  text-gray-700 mb-[25px]">
                Drop us your message and I'll get back to you as soon as
                possible.
              </div>
              <div className="form">
                <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[12px]">
                  name
                </div>
                <input
                  className="uppercase w-[100%] px-[22px] py-[15px] mb-5 border border-gray-200 hover:border-gray-500 cursor-pointer"
                  maxLength={256}
                  type="text"
                  placeholder="james coffee"
                />
                <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[12px]">
                  email address
                </div>
                <input
                  className="uppercase w-[100%] px-[22px] py-[15px] mb-5 border border-gray-200 hover:border-gray-500 cursor-pointer"
                  maxLength={256}
                  type="text"
                  placeholder="customer@coffeestyle.io"
                />
                <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[12px]">
                  your message
                </div>
                <input
                  className="uppercase w-[100%] pl-2 md:pl-[22px] pt-[15px] pb-[60px] mb-5 border border-gray-200 hover:border-gray-500 cursor-pointer"
                  maxLength={256}
                  type="text"
                  placeholder="hi! i would like to ask something about mugs."
                />
                <div className="w-fit max-lg:mx-auto">
                  <div className="button text-white bg-slate-900">
                    send message
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l"></div>
            <div className="border-b pb-[60px] mb-[60px]"></div>
            <div className="right basis-1/3 lg:pl-[60px] max-lg:text-center">
              <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[10px] ">
                contact form
              </div>
              <div className="text-[18px] text-gray-700 mb-[25px] ">CoffeeStyle. Inc</div>
              <div className="text-[16px] text-gray-500 mb-[14px]">
                Pride Ave,
                <br />
                Hamlyn Heights
                <br />
                VIC 3215
                <br />
                Australia
              </div>
              <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[24px]">
                CALL US
              </div>
              <div className="text-[18px] text-gray-700 mb-[42px] hover:text-coffee-600 cursor-pointer">
                +1 (415) 555-1212
              </div>
              <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-[24px]">
                EMAIL US
              </div>
              <div className="text-[18px] text-gray-700 hover:text-coffee-600 cursor-pointer">
                us@coffeestyle.io
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[85%] xl:w-[70%] mx-auto ">
          <div>
            <div className="label mb-24 lg:my-24">
              <div className="icon-label"></div>
              <div className="tag-label">directory</div>
              <div className="icon-label"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-center gap-4">
            <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-6">press</div>
            <div className="text-[18px] text-gray-700  mb-6">Robb Kohler</div>
            <div className="text-[16px] text-gray-500  mb-6">
                <div>086-374-4962</div>
                <div>robb.kohler@coffeestyle.com</div>
            </div>
            <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-6">management</div>
            <div className="text-[18px] text-gray-700 mb-6">Roob Dayana</div>
            <div className="text-[16px] text-gray-500  mb-6">
                <div>354-341-2750</div>
                <div>roob.dayana@coffeestyle.com</div>
            </div>
            <div className="uppercase text-[14px] text-gray-500 font-semibold tracking-widest mb-6">support</div>
            <div className="text-[18px] text-gray-700 mb-6">Warren Marsh</div>
            <div className="text-[16px] text-gray-500  mb-6">
                <div>531-403-0376</div>
                <div>warren.marsh@coffeestyle.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

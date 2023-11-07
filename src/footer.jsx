import React from "react";
const Footer = () => {
  return (
    <footer className="lg:mx-10 mt-28">
      <div className="h-[330px] bg-[#1b1f2e] text-center px-3 py-2">
        <div className="label mt-16 mb-6">
          <div className="icon-label"></div>
          <div className="tag-label">sign up and get free coffee bags</div>
          <div className="icon-label"></div>
        </div>
        <div className="text-white text-3xl mb-8">Coffee Updates</div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <div className="w-[80%] lg:w-[30%]">
            <input
              className="py-4 px-6 text-white uppercase bg-[#1b1f2e] border border-gray-700 w-[100%] hover:border-gray-500"
              type="text"
              placeholder="CUSTOMER@COFFEESTYLE.IO"
            />
          </div>
          <div className="w-[80%] lg:w-[25%] ">
            <div className="button text-black bg-white">subcribe</div>
          </div>
        </div>
      </div>
      <div className="w-[400px] lg:w-[940px] mt-[100px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-6">
          <div className="col-span-2 grid grid-rows-3 gap-4 mr-4 justify-center lg:justify-start">
            <div className="text-lg font-bold tracking-wide mb-[15px] text-center lg:text-left">
              CoffeeStyle.
            </div>
            <div className="mt-[-60px]">
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href="">Home</a>
              </div>
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href=""> Our Products</a>
              </div>
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href=""> About</a>
              </div>
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href=""> Contact</a>
              </div>
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href=""> Styleguide</a>
              </div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500 mb-[15px] text-center lg:text-left lg:justify-start">
                We’re Always Happy to Help
              </div>
              <div className="flex items-end text-2xl text-gray-900 mb-[15px] hover:text-coffee-600">
                <a href="">us@coffeestyle.io</a>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid grid-rows-3 gap-4 mr-4 justify-center">
            <div className="text-sm text-gray-500 mb-[15px] text-center lg:text-left">
              Delivering the best coffee life since 1996. From coffee geeks to
              the real ones.
            </div>
            <div className="uppercase text-sm  text-gray-500 font-semibold text-center lg:text-left">
              follow us
            </div>
            <div className="flex items-start text-sm text-gray-400 mb-[15px] hover:text-coffee-600 justify-center text-center lg:justify-start mt-[-30px] lg:mt-0">
              <a href="">Powered by Webflow</a>
            </div>
          </div>
          <div className="col-span-1 grid grid-rows-3 gap-4 mr-4  mt-[-140px] lg:mt-0">
            <div className="flex items-end text-sm text-gray-400 mb-[15px] hover:text-coffee-600 justify-center text-center lg:text-left">
              <a href=""> CoffeeStyle Inc. © 1996</a>
            </div>
            <div className="">
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href="">Facebook</a>
              </div>
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href=""> Instagram</a>
              </div>
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href=""> Pinterest</a>
              </div>
              <div className="flex lg:items-end text-sm text-gray-500 mb-[15px] hover:text-coffee-600 justify-center lg:justify-start">
                <a href=""> Twitter</a>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-rows-3 gap-4 mt-[-140px] lg:mt-0">
            <div className="uppercase text-sm  text-gray-500 font-semibold text-center lg:text-left">
              menu
            </div>
            <div className="uppercase text-sm  text-gray-500 font-semibold text-center lg:text-left">
              contact us
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

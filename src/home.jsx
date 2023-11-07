import React from "react";
const Home = () => {
  return (
    <main className="">
      <div className="h-[530px] bg-[url('../public/img/slider.jpg')] bg-cover bg-bottom">
        <div className=" w- h-full bg-gray-900 bg-opacity-40 py-32 flex flex-col justify-center items-center">
          <div className="text-white text-center">
            <div className="uppercase text-sm font-semibold text-gray-300 tracking-wider mb-6">
              best place to buy coffee
            </div>
            <div className="text-5xl mb-6">Coffee Mugs</div>
            <div className="text-gray-200 text-[18px] mb-8">
              The most versatile furniture system ever created. Designed to fit
              your life, made to move and grow.
            </div>
            <div className="flex justify-center">
              <div className="button bg-white text-gray-950 w-max">
                <a href="/product">explore our products</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="px-8 sm:px-16 lg:px-64 xl:px-[360px] pt-32 text-center">
          <div className="font-semiboldbold text-[28px] leading-10 mb-6">
            Even the all-powerful Pointing has no control about the blind texts.
          </div>
          <div className="text-gray-600 tracking-wide mb-8">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth.
            <br />
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </div>
          <div>
            <a
              href="/about"
              className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-100 hover:after:bg-coffee-200 after:h-0.5 after:w-full"
            >
              Read the full Story
            </a>
          </div>
        </div>
      </div>
      <div className="label my-24">
        <div className="icon-label"></div>
        <div className="tag-label">featured mugs</div>
        <div className="icon-label"></div>
      </div>
      <div className="sm:w-[85%] md:w-[75%] lg:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className="h-[320px] md:h-[450px] lg:h-[540px] bg-[url('../public/img/card/card1.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center mt-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Pink Premium Ceramic
              </div>
              <div className="mt-4">
                <span className="text-coffee-400 text-xl mr-4">$25.00</span>
                <span className="text-gray-400 line-through">$ 37.00 USD</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[320px] md:h-[450px] lg:h-[540px] bg-[url('../public/img/card/card2.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className="absolute bg-white top-2 right-2 px-3 py-2 text-coffee-400 font-semibold">
                    On Sale.
                  </div>
                  <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center mt-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Golden Designers Mug
              </div>
              <div className="mt-4">
                <span className="text-coffee-400 text-xl mr-4">$50.00</span>
                <span className="text-gray-400 line-through">$ 69.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="label my-24">
        <div className="icon-label"></div>
        <div className="tag-label">more products</div>
        <div className="icon-label"></div>
      </div>
      <div className="w-[85%] xl:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4">
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product1.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className="absolute bg-white top-2 right-2 px-3 py-2 text-coffee-400 font-semibold">
                    On Sale.
                  </div>
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Red Love Cup
              </div>
              <div className="mt-4">
                <span className="text-coffee-400 text-xl mr-4">$25.00</span>
                <span className="text-gray-400 line-through">$ 37.00 USD</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product2.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className="absolute bg-white top-2 right-2 px-3 py-2 text-coffee-400 font-semibold">
                    On Sale.
                  </div>
                  <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Black Tea Cup
              </div>
              <div className="mt-4">
                <span className="text-coffee-400 text-xl mr-4">$15.00</span>
                <span className="text-gray-500 line-through">$ 29.00 USD</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product3.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                B&W Essentials Mug
              </div>
              <div className="mt-4">
                <span className="text-gray-500 mr-4">$19.00 USD</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product4.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Winter Style Mug
              </div>
              <div className="mt-4">
                <span className="text-gray-400 mr-4">$25.00 USD</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product5.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Ceramic Tea
              </div>
              <div className="text-gray-500 mt-4">$ 46.00 USD</div>
            </div>
          </div>
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product6.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                No Handle Bar Cup
              </div>
              <div className="text-gray-500 mt-4">$ 34.00 USD</div>
            </div>
          </div>
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product7.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Espresso Cup by Mugs.co
              </div>
              <div className="text-gray-500 mt-4">$ 25.00 USD</div>
            </div>
          </div>
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product8.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Pink Premium Ceramic
              </div>
              <div className="text-gray-500 mt-4">$ 99.00 USD</div>
            </div>
          </div>
          <div>
            <div className="h-[320px] bg-[url('../public/img/products/product9.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                    explore mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-10">
              <div className="text-xl text-gray-800 hover:text-coffee-400 cursor-pointer">
                Summer Designer Cup
              </div>
              <div className="text-gray-500 mt-4">$ 29.00 USD</div>
            </div>
          </div>
        </div>
      </div>
      <div className="label my-24">
        <div className="icon-label"></div>
        <div className="tag-label">
          Buy 2 mugs and get a coffee magazine free
        </div>
        <div className="icon-label"></div>
      </div>
      <div className="sm:w-[100%] md:w-[95%] xl:w-[65%] mx-auto mb-24">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10">
          <div className="basis-1/2 md:flex md:flex-row w-full h-full gap-5">
            <div className="h-[280px] basis-2/3 mb-5 md:mb-0 bg-[url('../public/img/magazine/img1.jpg')] bg-cover bg-center bg-no-repeat"></div>
            <div className="flex flex-row md:flex-col grid-cols-2 gap-5">
              <div className="w-[120px] h-[130px] sm:h-[200px] md:h-[130px] basis-1/2 bg-[url('../public/img/magazine/img2.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[120px] h-[130px] sm:h-[200px] md:h-[130px] basis-1/2 bg-[url('../public/img/magazine/img3.jpg')] bg-cover bg-center bg-no-repeat"></div>
            </div>
          </div>
          <div className="basis-1/2 mt-4 md:mt-0 text-center md:text-left">
            <div className="uppercase text-sm tracking-wider font-bold text-gray-500 my-3">
              premium offer
            </div>
            <div className="text-4xl mb-5">Get our Coffee Magazine</div>
            <div className="text-gray-500 tracking-wide leading-7 max-w-md">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </div>
            <div className="mt-5 flex justify-center md:justify-start">
              <div className="button bg-slate-900 text-white w-max">
                <a href="/product">start shopping</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[360px] bg-[url('../public/img/magazine/parallax.jpg')] bg-cover bg-center bg-no-repeat bg-fixed "></div>
      <div className="label my-24">
        <div className="icon-label"></div>
        <div className="tag-label">Behind the mugs, lifestyle stories</div>
        <div className="icon-label"></div>
      </div>
      <div className="sm:w-[85%] md:w-[75%] lg:w-[65%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <div className="h-[300px] bg-[url('../public/img/stories/str1.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                  Read the full Story
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-7 max-md:text-center">
              <div className="text-xl text-gray-600 hover:text-coffee-400 cursor-pointer">
                Health Check: why do I get a headache when I haven’t had my
                coffee?
              </div>
              <div className="mt-4">
                <div className="text-gray-500 text-base mb-4">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className="text-gray-500 uppercase text-[12px] tracking-widest font-medium">
                  october 9, 2018
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[300px] bg-[url('../public/img/stories/str2.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                  Read the full Story
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-7 max-md:text-center">
              <div className="text-xl text-gray-600 hover:text-coffee-400 cursor-pointer">
                How long does a cup of coffee keep you awake?
              </div>
              <div className="mt-4">
                <div className="text-gray-500 text-base mb-4">
                  It is a paradisematic country, in which roasted parts. Vel qui
                  et ad voluptatem.
                </div>
                <div className="text-gray-500 uppercase text-[12px] tracking-widest font-medium">
                  october 9, 2018
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[300px] bg-[url('../public/img/stories/str3.jpg')] bg-cover bg-center bg-no-repeat">
              <a href="">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                  <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                  Read the full Story
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-7 max-md:text-center">
              <div className="text-xl text-gray-600 hover:text-coffee-400 cursor-pointer">
                Recent research suggests that heavy coffee drinkers may reap
                health benefits.
              </div>
              <div className="mt-4">
                <div className="text-gray-500 text-base mb-4">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className="text-gray-500 uppercase text-[12px] tracking-widest font-medium">
                  october 9, 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
};
export default Home;

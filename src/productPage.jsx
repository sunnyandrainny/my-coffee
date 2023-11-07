const ProductPage = () => {
  return (
    <div className="mt-32 xl:mx-56 lg:mx-32">
      <div className="text-center">
        <div className="text-4xl mb-4">Our Products</div>
        <div className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="flex mt-24 xl:gap-[84px] lg:gap-8 max-lg:flex-col">
        <div className="basis-1/2">
          <div className="h-[380px] bg-[url('../public/img/stories/str1.jpg')] bg-cover bg-center bg-no-repeat">
            <a href="">
              <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                <div className=" button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                  Read the full Story
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-[460px] lg:basis-1/2 text-center max-lg:mt-6">
          <div className="text-sm tracking-widest font-semibold text-gray-400">
            NEW ARTICLE IS LIVE
          </div>
          <div className="text-[28px] leading-[52px] mt-[20px] mb-[15px] ">
            Health Check: why do I get a headache when I haven’t had my coffee?
          </div>
          <div className="text-gray-500 leading-7">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth.
          </div>
          <div className="text-white bg-slate-900 w-fit mt-4 mx-auto">
            <div className="button">read the full story</div>
          </div>
        </div>
      </div>
      <div className="label my-24">
        <div className="icon-label"></div>
        <div className="tag-label">products</div>
        <div className="icon-label"></div>
      </div>
      <div className="w-[85%] xl:w-[100%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4">
          <div>
            <div className="h-[380px] bg-[url('../public/img/products/product1.jpg')] bg-cover bg-center bg-no-repeat">
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
            <div className="h-[380px] bg-[url('../public/img/products/product2.jpg')] bg-cover bg-center bg-no-repeat">
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
                <span className="text-gray-400 line-through">$ 29.00 USD</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[380px] bg-[url('../public/img/products/product3.jpg')] bg-cover bg-center bg-no-repeat">
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
            <div className="h-[380px] bg-[url('../public/img/products/product4.jpg')] bg-cover bg-center bg-no-repeat">
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
                <span className="text-gray-500 mr-4">$25.00 USD</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[380px] bg-[url('../public/img/products/product5.jpg')] bg-cover bg-center bg-no-repeat">
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
            <div className="h-[380px] bg-[url('../public/img/products/product6.jpg')] bg-cover bg-center bg-no-repeat">
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
            <div className="h-[380px] bg-[url('../public/img/products/product7.jpg')] bg-cover bg-center bg-no-repeat">
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
            <div className="h-[380px] bg-[url('../public/img/products/product8.jpg')] bg-cover bg-center bg-no-repeat">
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
            <div className="h-[380px] bg-[url('../public/img/products/product9.jpg')] bg-cover bg-center bg-no-repeat">
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
          <div>
            <div className="h-[380px] bg-[url('../public/img/products/product10.jpg')] bg-cover bg-center bg-no-repeat">
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
              Golden Designers Mug
              </div>
              <div className="mt-4">
                <span className="text-coffee-400 text-xl mr-4">$49.00</span>
                <span className="text-gray-400 line-through">$ 60.00 USD</span>
              </div>
            </div>
          </div><div>
            <div className="h-[380px] bg-[url('../public/img/products/product11.jpg')] bg-cover bg-center bg-no-repeat">
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
              White Mug Essential
              </div>
              <div className="mt-4">
                <span className="text-gray-400 mr-4">$19.00 USD</span>
              </div>
            </div>
          </div><div>
            <div className="h-[380px] bg-[url('../public/img/products/product12.jpg')] bg-cover bg-center bg-no-repeat">
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
              White Ceramic
              </div>
              <div className="mt-4">
                <span className="text-coffee-400 text-xl mr-4">$29.00</span>
                <span className="text-gray-400 line-through">$ 35.00 USD</span>
              </div>
            </div>
          </div><div>
            <div className="h-[380px] bg-[url('../public/img/products/product13.jpg')] bg-cover bg-center bg-no-repeat">
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
              Basic White Mug
              </div>
              <div className="mt-4">
                <span className="text-gray-400 mr-4">$19.00 USD</span>
              </div>
            </div>
          </div><div>
            <div className="h-[380px] bg-[url('../public/img/products/product14.jpg')] bg-cover bg-center bg-no-repeat">
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
              Aroma Art Coffee Mug
              </div>
              <div className="mt-4">
                <span className="text-gray-400 mr-4">$29.00 USD</span>
              </div>
            </div>
          </div><div>
            <div className="h-[380px] bg-[url('../public/img/products/product15.jpg')] bg-cover bg-center bg-no-repeat">
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
              Blue Premium Mug
              </div>
              <div className="mt-4">
                <span className="text-gray-400 mr-4">$79.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;

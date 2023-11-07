import React from "react";
const Blog = () => {
  return (
    <div>
      <div className="h-[563px] bg-slate-100 mx-10 mt-6 text-center ">
        <div className="text-4xl mb-4 pt-28">
          Read coffee stories on our Blog
        </div>
        <div className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Suspendisse varius enim in eros elementum tristique.
        </div>
        <div className="label my-24">
          <div className="icon-label"></div>
          <div className="tag-label">featured mugs</div>
          <div className="icon-label"></div>
        </div>
      </div>
      <div className="px-[30px]">
        <div className="max-md:w-[85%] md:w-[80%] lg:w-[65%] mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[-100px] ">
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
              <div className="mt-7 max-lg:text-center">
                <div className="text-xl text-gray-600 hover:text-coffee-400 cursor-pointer">
                  Health Check: why do I get a headache when I haven’t had my
                  coffee?
                </div>
                <div className="text-center lg:text-left mt-4">
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
              <div className="mt-7 max-lg:text-center">
                <div className="text-xl text-gray-600 hover:text-coffee-400 cursor-pointer">
                  How long does a cup of coffee keep you awake?
                </div>
                <div className="text-center lg:text-left mt-4">
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
          </div>
        </div>
        <div className="xl:flex mx-auto w-[85%] gap-12">
          <div className="left basis-2/3">
            <div className="border-b-[1px] pb-8">
              <div className="text-[22px] ">Lastest Posts</div>
            </div>
            <div>
              <div className="mt-12">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="xl:basis-1/2 md:basis-1/3 h-[310px] w-[100%] md:h-[210px] md:w-[260px] bg-[url('../public/img/stories/str3.jpg')] bg-cover bg-center bg-no-repeat">
                    <a href="">
                      <div className=" hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                        <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                          Read the full Story
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="basis-1/2 max-md:text-center">
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
                <div className="flex flex-col md:flex-row gap-12 mt-8">
                  <div className="xl:basis-1/2 md:basis-1/3 h-[310px] w-[100%] md:h-[210px] md:w-[260px] bg-[url('../public/img/post/post2.jpg')] bg-cover bg-center bg-no-repeat">
                    <a href="">
                      <div className=" hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                        <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                          Read the full Story
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="basis-1/2 max-md:text-center">
                    <div className="text-xl text-gray-600 hover:text-coffee-400 cursor-pointer">
                      More coffee, lower death risk?
                    </div>
                    <div className="mt-4">
                      <div className="text-gray-500 text-base mb-4">
                        Eveniet itaque aperiam qui officia in ducimus. Voluptas
                        culpa ut eligendi in. Minima est dolores dolore aut et et
                        alias p
                      </div>
                      <div className="text-gray-500 uppercase text-[12px] tracking-widest font-medium">
                        october 9, 2018
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 mt-8">
                  <div className="xl:basis-1/2 md:basis-1/3 h-[310px] w-[100%] md:h-[210px] md:w-[260px] bg-[url('../public/img/stories/str2.jpg')] bg-cover bg-center bg-no-repeat">
                    <a href="">
                      <div className=" hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                        <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                          Read the full Story
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="basis-1/2 max-md:text-center">
                    <div className="text-xl text-gray-600 hover:text-coffee-400 cursor-pointer">
                      How long does a cup of coffee keep you awake?
                    </div>
                    <div className="mt-4">
                      <div className="text-gray-500 text-base mb-4">
                        It is a paradisematic country, in which roasted parts. Vel
                        qui et ad voluptatem
                      </div>
                      <div className="text-gray-500 uppercase text-[12px] tracking-widest font-medium">
                        october 9, 2018
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 mt-8">
                  <div className="xl:basis-1/2 md:basis-1/3 h-[310px] w-[100%] md:h-[210px] md:w-[260px] bg-[url('../public/img/stories/str1.jpg')] bg-cover bg-center bg-no-repeat">
                    <a href="">
                      <div className=" hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                        <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                          Read the full Story
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="basis-1/2 max-md:text-center">
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
                <div className="flex flex-col md:flex-row gap-12 mt-8">
                  <div className="xl:basis-1/2 md:basis-1/3 h-[310px] w-[100%] md:h-[210px] md:w-[260px] bg-[url('../public/img/post/post5.jpg')] bg-cover bg-center bg-no-repeat">
                    <a href="">
                      <div className=" hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 group relative">
                        <div className="button absolute bg-white w-[90%] bottom-4 left-1/2 -translate-x-1/2 text-amber-950 hidden group-hover:block group-hover:animate-slideUp">
                          Read the full Story
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="basis-1/2 max-md:text-center">
                    <div className="text-xl text-gray-600 hover:text-coffee-400 cursor-pointer">
                      Will drinking coffee prolong your life?
                    </div>
                    <div className="mt-4">
                      <div className="text-gray-500 text-base mb-4">
                      Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. 
                      Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus
                      </div>
                      <div className="text-gray-500 uppercase text-[12px] tracking-widest font-medium">
                        october 9, 2018
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right basis-1/3">
            <div className="border-b-[1px] pb-8">
              <div className="text-[22px] ">About Us</div>
            </div>
            <div className="mt-8">
              <div className=" text-xl font-bold ">CoffeeStyle.</div>
              <div className="text-gray-500 text-base my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
              <div className="mb-16">
                <a
                  href=""
                  className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-100 hover:after:bg-coffee-200 after:h-0.5 after:w-full"
                >
                  Read the full Story
                </a>
              </div>
            </div>
            <div className="border-b-[1px] pb-8">
              <div className="text-[22px] ">Categories</div>
            </div>
            <div className="mt-8">
              <div className="mb-16">
                <div className="">
                  <div className="text-gray-500 text-base py-2 px-5 hover:text-black border-l-2 border-coffee-100 hover:border-l-2 hover:border-coffee-600 hover:bg-[#f8f4f3] mb-2">
                    <a className="cursor-pointer">
                      <div> Barista</div>
                    </a>
                  </div>
                  <div className="text-gray-500 text-base py-2 px-5 hover:text-black border-l-2 border-coffee-100 hover:border-l-2 hover:border-coffee-600 hover:bg-[#f8f4f3] mb-2">
                    <a className="cursor-pointer">
                      <div>Coffee</div>
                    </a>
                  </div>
                  <div className="text-gray-500 text-base py-2 px-5 hover:text-black border-l-2 border-coffee-100 hover:border-l-2 hover:border-coffee-600 hover:bg-[#f8f4f3] mb-2">
                    <a className="cursor-pointer">
                      <div>Lifestyle</div>
                    </a>
                  </div>
                  <div className="text-gray-500 text-base py-2 px-5 hover:text-black border-l-2 border-coffee-100 hover:border-l-2 hover:border-coffee-600 hover:bg-[#f8f4f3] mb-2">
                    <a className="cursor-pointer">
                      <div>Mugs</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] pb-8">
              <div className="text-[22px] ">Authors</div>
            </div>
            <div className="mt-8">
              <div className="mb-16">
                <div className="">
                  <div className="cursor-pointer text-gray-500 text-base py-2 px-5 hover:text-black border-l-2 border-coffee-100 hover:border-l-2 hover:border-coffee-600 hover:bg-[#f8f4f3] mb-2">
                    <a className="flex items-center">
                      <div className="w-[60px] h-[60px] bg-[url('../public/img/author/author1.jpg')] bg-cover bg-center bg-no-repeat mr-8"></div>
                      <div> Fred Gleason</div>
                    </a>
                  </div>
                  <div className="cursor-pointer text-gray-500 text-base py-2 px-5 hover:text-black border-l-2 border-coffee-100 hover:border-l-2 hover:border-coffee-600 hover:bg-[#f8f4f3] mb-2">
                  <a className="flex items-center">
                      <div className="w-[60px] h-[60px] bg-[url('../public/img/author/author2.jpg')] bg-cover bg-center bg-no-repeat mr-8"></div>
                      <div> Isabel Hamill</div>
                    </a>
                  </div>
                  <div className="cursor-pointer text-gray-500 text-base py-2 px-5 hover:text-black border-l-2 border-coffee-100 hover:border-l-2 hover:border-coffee-600 hover:bg-[#f8f4f3] mb-2">
                  <a className="flex items-center">
                      <div className="w-[60px] h-[60px] bg-[url('../public/img/author/author3.jpg')] bg-cover bg-center bg-no-repeat mr-8"></div>
                      <div>Maurice Herman</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-[85%] mt-40 text-center">
          <div className="text-coffee-400 text-xl border-l-2 border-b-2 border-coffee-100 p-[35px] ">
          "I wake up some mornings and sit and have my coffee and look out at my beautiful garden, and I go, ’Remember how good this is. Because you can lose it."
          </div>
          <div className="text-sm text-gray-400 font-medium tracking-widest mt-8">JASON JOHNSON - OWNER OF COFFEESTYLE</div>
        </div>
      </div>
    </div>
  );
};
export default Blog;

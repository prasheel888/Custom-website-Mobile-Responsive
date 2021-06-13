import React from "react";

const Features = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <img
              src="images/leaf.png"
              alt="logo"
              class="w-18 h-18 text-black p-2  "
              viewBox="0 0 24 24"
              rounded-full
            />
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Read Our Blog
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
          </div>
          <div class="flex flex-wrap -m-3">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/second.png
                  "
                  alt="content"
                />

                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Blog Post One
                </h2>
                <p class="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Read More
                </h3>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/first.png"
                  alt="content"
                />

                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Blog Post One
                </h2>
                <p class="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Read More
                </h3>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/third.png"
                  alt="content"
                />

                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Blog Post One
                </h2>
                <p class="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Read More
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

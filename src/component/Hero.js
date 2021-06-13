import React from "react";

const Hero = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
              Healthy life with
              <br class="hidden text-6xl lg:inline-block " />
              Nature Organic
            </h1>
            <p class="mb-8 leading-relaxed">
              Vegetables are the edible parts of a plant that is used in cooking
              or can be eaten now.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-pale-600 rounded text-lg">
                Explore Now
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="images/flower.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

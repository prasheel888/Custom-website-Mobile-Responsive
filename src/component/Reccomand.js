import React from "react";

const Reccomand = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center flex-col">
          <img
            src="images/inverted.png"
            alt="logo"
            class="w-15 h-15 text-black p-2  "
            viewBox="0 0 24 24"
            rounded-3xl
          />
          <img
            src="images/bot.png"
            alt="logo"
            class="w-13 h-13 text-black p-2  "
            viewBox="0 0 24 24"
            rounded-full
          />
          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
              Jane Doe
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Thank you for all the amazing produce and products you deliver
              each week… you make my life so easy an bring goodness into our
              family eating. I’ve been roasting a lot of brussel sprouts and
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reccomand;

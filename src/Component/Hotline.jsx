import React from "react";

const Hotline = () => {
  return (
    <section className="w-full py-16 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        {/* BG IMAGE WRAPPER */}
        <div
          className="
            w-full h-55
            bg-[url('/hotline.png')]
            bg-cover bg-no-repeat
            flex flex-col items-center justify-center
            text-center
          "
        >
          <p className="text-red-600 text-[22px] md:text-3xl font-semibold mb-2">
            যে কোন প্রয়োজনে কল করুন
          </p>

          <p className="text-red-600 text-3xl md:text-5xl font-bold">
            হটলাইন: 01600-324567
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hotline;

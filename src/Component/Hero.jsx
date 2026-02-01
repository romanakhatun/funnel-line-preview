import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="bg-[url('/banner.png')] bg-cover flex items-center justify-center xl:min-h-screen">
      <div className="w-full max-w-7xl px-6 lg:px-2 py-15">
        {/* logo */}
        <div className="max-w-3xl space-y-6">
          <div className="">
            <Image src="/logo.svg" alt="Honey Logo" width={240} height={78} />
          </div>

          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mt-10">
            <span className="text-yellow-400">পুষ্টিগুণ বৃদ্ধি</span> মধুময়
            বাদাম সেবনে অসংখ্য রোগবালাই থেকে পরিত্রাণ পাওয়া যায়
          </h1>

          {/* Price */}
          <p className="text-[#a8de63] line-through font-semibold text-2xl xl:text-4xl">
            পূর্বমূল্য: ১৫০০ টাকা
          </p>
          <p className="text-[#f22512] text-3xl lg:text-4xl lg: xl:text-[50px] font-bold mt-1">
            মূল্য: ১০০০ টাকা
          </p>

          {/* Button */}
          <button className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-500 cursor-pointer hover:scale-105 hover:text-white shadow-[0_67px_80px_#1E140A61,0_43.43px_46.85px_#1E140A31,0_25.81px_25.48px_#1E140A0B,0_13.4px_13px_#1E140A09,0_5.46px_6.52px_#1E140A07,0_1.24px_3.15px_#1E140A04]">
            <IoCartOutline size={25} />
            অর্ডার করুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

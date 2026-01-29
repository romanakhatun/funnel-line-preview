import Image from "next/image";
import React from "react";

const FloatingCTA = () => {
  return (
    <>
      <section className="relative w-full py-20">
        {/* Left image */}
        <div className="floating-left">
          <Image
            src="/honey_left.svg"
            alt="Honey Left"
            width={180}
            height={260}
            priority
          />
        </div>

        {/* Right image */}
        <div className="floating-right">
          <Image
            src="/honey_left.svg"
            alt="Honey Right"
            width={180}
            height={260}
            priority
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <button className="bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-500 cursor-pointer hover:scale-105 hover:text-white shadow-[0_67px_80px_#1E140A61,0_43.43px_46.85px_#1E140A31,0_25.81px_25.48px_#1E140A0B,0_13.4px_13px_#1E140A09,0_5.46px_6.52px_#1E140A07,0_1.24px_3.15px_#1E140A04]">
            অর্ডার করতে এখানে ক্লিক করুন
          </button>

          <p className="mt-10 text-xl md:text-2xl font-semibold text-[#0a2c1a]">
            আর নয় দুশ্চিন্তা, আপনার জন্য মধুময় বাদামই যথেষ্ট। ১০০% কার্যকরী ও
            পরীক্ষিত পণ্য!
          </p>
        </div>
      </section>

      <section className="w-full py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full h-90 md:h-125 overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/uFjU5zFJx3E?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fpreview.funnelliner.xyz&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1&forigin=https%3A%2F%2Fpreview.funnelliner.xyz%2Flanding-10&aoriginsup=1&vf=1"
              title="Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FloatingCTA;

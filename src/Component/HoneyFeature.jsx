import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const HoneyFeature = () => {
  const points = [
    "মধু ভালো শক্তি প্রদানকারী খাদ্য। মধু দেহে তাপ ও শক্তি জুগিয়ে শরীরকে সুস্থ রাখে।",
    "মধুতে যে শর্করা থাকে তা সহজেই হজম হয়।",
    "হাঁপানি রোগ এবং ফুসফুসের যাবতীয় রোগ ও শ্বাসকষ্ট নিরাময়ে সহায়তাকারী।",
    "মধু অনিদ্রার ভালো ওষুধ। রাতে শোয়ার আগে এক গ্লাস পানির সঙ্গে দুই চা চামচ মধু মিশিয়ে খেলে এটি গভীর ঘুমে কাজ করে।",
    "মেয়েদের রূপচর্চার ক্ষেত্রে মাস্ক হিসেবে মধুর ব্যবহার বেশ জনপ্রিয়। মুখের ত্বকের মসৃণতা বৃদ্ধির জন্য মধু ব্যবহৃত হয়।",
  ];

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0a2c1a] mb-16">
          প্রতিদিন দুই চামচ মধুময় বাদাম আপনার উপকার করবে
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/honeyFeature.png"
              alt="Daily Honey Benefit"
              width={420}
              height={420}
              priority
            />
          </div>

          <div className="w-full lg:w-1/2">
            <ul className="space-y-6">
              {points.map((text, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-yellow-400 text-white flex items-center justify-center text-sm font-bold">
                    <FaCheck />
                  </span>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute right-10 top-32 hidden lg:block">
        <Image src="/bee1.svg" alt="Bee" width={40} height={40} />
      </div>
    </section>
  );
};

export default HoneyFeature;

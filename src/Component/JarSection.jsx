import Image from "next/image";
import React from "react";

const JarSection = () => {
  return (
    <section className="w-full py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          <Image
            src="/jar1.png"
            alt="Honey Jar 1"
            width={336}
            height={350}
            className="object-contain"
          />

          <Image
            src="/jar2.png"
            alt="Honey Jar 2"
            width={336}
            height={350}
            className="object-contain"
          />

          <Image
            src="/jar3.png"
            alt="Honey Jar 3"
            width={336}
            height={350}
            className="object-contain"
          />

          <Image
            src="/jar4.png"
            alt="Honey Jar 4"
            width={336}
            height={350}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default JarSection;

import Image from "next/image";

function Banner() {
  return (
    <section className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image
        src="https://links.papareact.com/0fm"
        objectPosition="center"
        alt="img"
        objectFit="cover"
        layout="fill"
      />

      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="font-semibold">Not Sure Where to go? perfect</p>
        <button className="bg-white text-purple-500 font-semibold py-2 px-5 shadow-lg hover:shadow-xl hover:scale-110 transition-shadow active:scale-105 duration-200 rounded-full mt-5">
          I &apos; m Flexible
        </button>
      </div>
    </section>
  );
}

export default Banner;

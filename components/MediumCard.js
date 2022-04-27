import Image from "next/image";

function MediumCard({ image, title }) {
  return (
    <div className="cursor-pointer ">
      <div className="relative w-40 h-40 md:w-60 md:h-60 lg:h-72 lg:w-72 hover:scale-105">
        <Image
          src={image}
          objectPosition="center"
          alt="img"
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <p className="text-center text-xl text-gray-600 mt-5">{title}</p>
    </div>
  );
}

export default MediumCard;

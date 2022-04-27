import Image from "next/image";

function InfoCard({ image, title, location, price, total, description, star }) {
  return (
    <div className="flex items-start">
      <div className="relative h-24 w-32 md:h-48 lg:h-52 lg:w-72 rounded-lg overflow-hidden">
        <Image src={image} alt="image" objectFit="cover" layout="fill" />
      </div>
      <div className="ml-5 flex flex-col flex-1 justify-around">
        <div className="">
          <p>{location}</p>
          <p className="text-xl">{title}</p>
          <p>{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>{star}</p>
          <div>
            <p className="text-xl font-bold">{price}</p>
            <p className="text-lg font-bold">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

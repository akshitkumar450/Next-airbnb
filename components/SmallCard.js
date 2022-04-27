import Image from "next/image";

function SmallCard({ location, image, distance }) {
  return (
    <div className="col-span-1 flex items-start scale-90 hover:scale-100 hover:bg-gray-100 transition-transform durationn-200 p-2 rounded-lg cursor-pointer ease-out">
      <div className="relative h-20 w-20 overflow-hidden">
        <Image
          src={image}
          objectPosition="center"
          alt="img"
          objectFit="contain"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="ml-5 text-gray-600">
        <p>{location}</p>
        <p>{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;

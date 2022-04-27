import { useState } from "react";
import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const selectionRange = {
    startDate: start,
    endDate: end,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStart(ranges.selection.startDate);
    setEnd(ranges.selection.endDate);
  };

  return (
    <header className="bg-white shadow-md grid items-center grid-cols-3 p-4 md:px-8 z-50">
      <div
        className="cursor-pointer col-span-1 h-10 relative"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="img"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
        />
      </div>
      <div className="col-span-1 rounded-full flex ring-2 px-2 ring-gray-300 items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 bg-transparent outline-none"
          placeholder={`${placeholder || "start your search"}`}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:inline-flex cursor-pointer h-8 w-8 mx-auto bg-red-400 text-white rounded-full p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="col-span-1 flex items-center justify-end space-x-5">
        <p className="hidden md:inline-flex text-gray-500">Become a Host</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>

      {value && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            ranges={[selectionRange]}
            onChange={handleSelect}
          />
          <div className="flex justify-between">
            <h2 className="text-2xl pl-2">Number of Guests</h2>
            <input
              type="number"
              min="1"
              className="text-[#fd5b61] text-lg outline-none w-16 p-1"
            />
          </div>
          <div className="flex">
            <button className="flex-1" onClick={() => setValue("")}>
              Cancel
            </button>
            <button
              className="flex-1 text-[#fd5b61] "
              onClick={() =>
                router.push({
                  pathname: "/search",
                  query: {
                    location: value,
                    startDate: start.toISOString(),
                    endDate: end.toISOString(),
                  },
                })
              }
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

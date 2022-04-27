import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ data1, data2 }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <section className="max-w-5xl mx-auto my-10 px-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Explore Nearby
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {data1.map((item) => (
            <SmallCard
              key={item.location}
              location={item.location}
              image={item.img}
              distance={item.distance}
            />
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-10 px-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Live Anywhere
        </h2>
        <div className="flex gap-5 mt-10 overflow-x-scroll cursor-pointer px-10 py-10">
          {data2.map((item) => (
            <MediumCard key={item.img} image={item.img} title={item.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const response1 = await fetch("https://links.papareact.com/pyp");
  const data1 = await response1.json();
  const response2 = await fetch("https://links.papareact.com/zp1");
  const data2 = await response2.json();
  return {
    props: {
      data1,
      data2,
    },
    revalidate: 10,
  };
}

import { useRouter } from "next/router";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Head from "next/head";

function Search({ data }) {
  const router = useRouter();
  const { query } = router;
  //   console.log(query);
  const formattedStartDate = format(new Date(query.startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(query.endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Head>
        <title>Airbnb | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${query.location} | ${range} `} />
      <main className="flex container mx-auto">
        <section>
          <p className="p-2">
            stays in {query.location} from {range}
          </p>
          <div className="space-y-5">
            {data.map((item, idx) => (
              <InfoCard
                key={idx}
                image={item.img}
                title={item.title}
                location={item.location}
                price={item.price}
                star={item.star}
                description={item.description}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Search;
export async function getServerSideProps(context) {
  const response = await fetch("https://links.papareact.com/isz");
  const data = await response.json();
  return {
    props: { data },
  };
}

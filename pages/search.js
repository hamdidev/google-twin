import Head from "next/head";
import { useRouter } from "next/router";
import ImageResults from "../components/ImageResults";
import SearchHeader from "../components/SearchHeader";
import { SearchResults } from "../components/SearchResults";
import Response from "../Response";

const search = ({ results }) => {
  const router = useRouter();
  return (
    <>
      <div>
        <Head>
          <title>{router.query.term}</title>
        </Head>
        {/* Search Header */}
        <SearchHeader />

        {router.query.searchType === "image" ? (
          <ImageResults results={results} />
        ) : (
          <SearchResults results={results} />
        )}
      </div>
    </>
  );
};

export default search;

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GOOGLE_API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}

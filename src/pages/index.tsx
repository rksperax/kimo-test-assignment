import MainLayout from "@/components/Mainlayout/Mainlayout";
import Highlight from "../components/HighlightsCard/index";
import Catergories from "@/components/Catergories/Catergories";
import { CatergoriesProps, HighlightsProps } from "@/types";

type LandingPageProps = {
  categories: CatergoriesProps[];
  highlights: HighlightsProps[];
};

function LandingPage(props: LandingPageProps) {
  const { categories, highlights } = props;
  const seo = {
    description:
      "Hawaii is known for its world-famous surf spots and waves that attract surfers from all over the globe. Here are some of the best islands for surfing in Hawaii",
    title: "Hawaii-Home",
  };
  return (
    <MainLayout seo={seo}>
      <Highlight highlights={highlights} />
      <Catergories categories={categories} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  // Fetching data from an API
  try {
    let categories = await fetch("https://web-dev.dev.kimo.ai/v1/categories");
    categories = await categories.json();
    let highlights = await fetch("https://web-dev.dev.kimo.ai/v1/highlights");
    highlights = await highlights.json();

    // Pass the data to the page via props
    return { props: { categories, highlights } };
  } catch (err) {
    return { props: {} };
  }
}

export default LandingPage;

import Catergories from "@/components/Catergories/Catergories";
import Highlights from "@/components/HighlightsCard";
import MainLayout from "@/components/Mainlayout/Mainlayout";
import TextSwiper from "@/components/TextSwiper/TextSwiper";
import { CatergoriesProps, HighlightProps } from "@/types";

type HighlightPDPProps = {
  categories: CatergoriesProps[];
  highlight: HighlightProps;
};

const HighlightPDP = (props: HighlightPDPProps) => {
  const { categories, highlight } = props;
  const seo = { description: highlight.description, title: highlight.name };

  return (
    <MainLayout seo={seo} image={highlight.image} name={highlight.name}>
      <TextSwiper highlight={highlight} />
      <Catergories categories={categories} />
    </MainLayout>
  );
};
//@ts-ignore
export async function getServerSideProps({ query }) {
  // Fetching data from an API
  try {
    let highlight = await fetch(
      `https://web-dev.dev.kimo.ai/v1/activities/${query.highlights}`
    );
    highlight = await highlight.json();
    let categories = await fetch("https://web-dev.dev.kimo.ai/v1/categories");
    categories = await categories.json();
    // Pass the data to the page via props
    return { props: { categories, highlight } };
  } catch (err) {
    return { props: {} };
  }
}

export default HighlightPDP;

import { SimpleGrid, chakra } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import HighlightsCard from "./HighlightsCard";
import { HighlightsProps } from "@/types";

  type HighLightPageProp={
    highlights:HighlightsProps[]
  }

const Highlights: React.FC<HighLightPageProp>=({highlights})=>{
  const { isLg } = useMediaQuery();
  const name = "highlight";
  return (
    <chakra.article px={[2, 60]} mb={[0, 10]} mt={[2, 5]}>
      <chakra.p mb={5} fontWeight={700}>
        Highlights
      </chakra.p>
      <Swiper
        mousewheel={{ forceToAxis: true }}
        pagination={
          !isLg && {
            clickable: true,
          }
        }
        navigation={
          isLg && {
            prevEl: `.${name}-prev`,
            nextEl: `.${name}-next`,
          }
        }
        slidesPerView={isLg ? 3 : 1.3}
        spaceBetween={15}
      >
        {highlights.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <HighlightsCard item={item}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </chakra.article>
  );
}

export default Highlights;

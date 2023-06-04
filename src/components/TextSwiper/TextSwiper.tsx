import { chakra, Box, ListItem, List, ListIcon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { HighlightProps } from "@/types";

type TextSwiperProps = {
  highlight: HighlightProps;
};

const TextSwiper: React.FC<TextSwiperProps> = ({ highlight }) => {
  const { isLg } = useMediaQuery();
  const name = "activites";
  return (
    <chakra.article px={[2, 60]} mb={[0, 10]} mt={[2, 5]}>
      <Box
        bg="linear-gradient(150deg, #fcdf8a, #f38381 100%)"
        borderRadius={"8px"}
        p="12px 24px"
        w="100%"
        h="120px"
        mb={6}
        color={"#fff"}
        fontSize={["12px", "18px"]}
      >
        {highlight.description}
      </Box>
      <Swiper
        autoplay={true}
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
        slidesPerView={isLg ? 2 : 1.3}
        spaceBetween={15}
      >
        {highlight.activities.map(({ name }) => {
          return (
            <SwiperSlide key={name}>
              <Box
                h="120px"
                borderRadius={"8px"}
                bg="linear-gradient(150deg, #7bff9e, #6b4dff 100%)"
                p="12px 24px"
                boxShadow={"0px 0px 16px rgba(0, 128, 128, 0.16)"}
                textAlign={"center"}
                color="#fff"
              >
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={StarIcon} color="pink.300" />
                    {name}
                  </ListItem>
                </List>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </chakra.article>
  );
};

export default TextSwiper;

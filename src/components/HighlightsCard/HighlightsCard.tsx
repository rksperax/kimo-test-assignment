/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { colors } from "@/constants/colors";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HighlightsProps } from "@/types";
import Link from "next/link";

type HighlightsCardProps = {
  item: HighlightsProps;
};

const HighlightsCard: React.FC<HighlightsCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  // CSS styles for the arrow box
  const arrowBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: colors.lightGreen,
    width: "40px",
    height: "40px",
    transition: "transform 0.3s ease", // CSS transition for smooth animation
    transform: isHovered ? "translateX(10px)" : "translateX(0)", // Move arrow to the right by 10px when hovered
  };
  // Event handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link href={`/${item.title}`}>
      <Box
        h={"340px"}
        borderRadius={"8px"}
        boxShadow={"0px 0px 16px rgba(0, 128, 128, 0.16)"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        position={"relative"}
      >
        <Box width={"100%"} height={"150px"} position={"relative"}>
          <Image
            src={item.image}
            fill={true}
            alt="hawaii pic"
            style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
          />
        </Box>
        <Box p={"16px 24px"}>
          <Text color={colors.green} mb={3}>
            {item.title}
          </Text>
          <Text mb={4}>{item.description}</Text>
          <Box position={"absolute"} bottom={25} right={15}>
            {/**@ts-ignore */}
            <Box style={arrowBoxStyles}>
              <img src="/icons/arrow_forward.png" alt="Arrow" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default HighlightsCard;

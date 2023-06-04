import { Box, Button, chakra, Image, SimpleGrid } from "@chakra-ui/react";
import SideBar from "../Sidebar/Sidebar";
import useScrollDirection from "../../hooks/useScrollDirection";
import Link from "next/link";

function Header() {
  const subHeading = ["Home", "Surfing", "Hula", "Vulcano"];
  const scrollDirection = useScrollDirection();
  return (
    <chakra.header
      m="auto"
      mt={[0, 9]}
      position={"fixed"}
      top={0}
      zIndex={999}
      width={"100%"}
      transitionProperty={"all"}
      transitionDuration={"500ms"}
      transform={
        scrollDirection == "down" ? "translateY(-120px)" : "translateY(0px)"
      }
    >
      <SimpleGrid
        columns={2}
        width={["100%", "65%"]}
        borderRadius={["none", "12px"]}
        p="12px 24px"
        m="auto"
        bg="#fff"
        display={["flex", "grid"]}
        alignItems={"center"}
        justifyContent={["space-between", "unset"]}
      backdropFilter={"blur(10px)"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          
        <Link href="/">
          <Image src="/logos/dark_aloha.png" alt="logo" />
          </Link>
          <Box
            display={["none", "flex"]}
            alignItems={"center"}
            justifyContent={"space-between"}
            w="100%"
            ml="75px"
          >
            {subHeading.map((item) => {
              return <chakra.p key={item}>{item}</chakra.p>;
            })}
          </Box>
        </Box>
        <Box
          display={["none", "flex"]}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Button variant={"primary"} width={"128px"}>
            Book a trip
          </Button>
        </Box>
        <SideBar />
      </SimpleGrid>
    </chakra.header>
  );
}

export default Header;

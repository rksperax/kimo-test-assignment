import { colors } from "@/constants/colors";
import { Image, chakra, Box } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  return (
    <chakra.footer bg={colors.darkGreen} p="12px 24px">
      <Box width={["100%", "65%"]} m="auto">
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link href={"/"}>
            <Image src="/logos/white_aloha.png" alt="logo" />
          </Link>
        </Box>
      </Box>
    </chakra.footer>
  );
}

export default Footer;

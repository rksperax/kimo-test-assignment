import { Box, chakra } from "@chakra-ui/react";
import Header from "../Header/Header";
import Image from "next/image";
import React from "react";
import Footer from "../Footer/Footer";
import SEO from "@/SEO/SEO";
import { ALLSEOProps } from "@/types";

type MainLayoutProps = {
  children: React.ReactNode;
  image?: string;
  name?: string;
  seo: ALLSEOProps
};

function MainLayout({
  children,
  image = "/picture/hawaii.png",
  name = "Welcome to Hawaii",
  seo
}: MainLayoutProps) {
  return (
    <>
      <Box width={"100%"} height={["300px", "450px"]} position={"relative"}>
        <SEO seo={seo}/>
        <Header />
        <Image src={image} fill={true} alt="hawaii pic" priority />
        <Box
          position={"absolute"}
          top={"55%"}
          left="50%"
          transform={"translate(-50%,-50%)"}
        >
          <chakra.p
            className="heading-text"
            fontSize={["52px", "140px"]}
            lineHeight={["50px", "132px"]}
          >
            {name}
          </chakra.p>
        </Box>
      </Box>
      <chakra.main pt={3}>{children}</chakra.main>
      <Footer />
    </>
  );
}

export default MainLayout;

import { colors } from "@/constants/colors";
import { Box, Text, SimpleGrid, Avatar, Button } from "@chakra-ui/react";
import AllCatergory from "./AllCatergories";
import { CatergoriesProps } from "@/types";

  type CatergoriesPageProps={
    categories:CatergoriesProps[]
  }


const Catergories:React.FC<CatergoriesPageProps>=({categories})=> {

  const allCatergory = [
    "Adventure",
    "Culinary",
    "Eco-tourism",
    "Family",
    "Sport",
  ];

  return (
    <SimpleGrid
      columns={[1, 2]}
      columnGap={42}
      bg={colors.lightGreen}
      w={"100%"}
      height={["auto", "530px"]}
      px={[2, 60]}
      mt={[2, 5]}
    >
      <Box mt={[5, 10]}>
        <Text mb={5} fontWeight={700}>
          Catergories
        </Text>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          {allCatergory.map((item) => {
            return <AllCatergory item={item} categories={categories} key={item}/>;
          })}
        </Box>
      </Box>

      <Box mt={[5, 10]} mb={[20, "none"]}>
        <Text mb={5} fontWeight={700}>
          Travel Guide
        </Text>
        <Box
          display={"flex"}
          alignItems={["flex-start", "center"]}
          justifyContent={"space-between"}
          bg="#fff"
          w="100%"
          h="176px"
          borderRadius={"8px"}
          p="24px"
        >
          <Box
            h="100%"
            display={"flex"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            flexDirection={"column"}
          >
            <Box>
              <Text color="#001A1A" fontWeight={700} fontSize={"24px"}>
                Hadwin Malone
              </Text>
              <Text fontWeight={400} fontSize={"16px"}>
                Guide since 2012
              </Text>
            </Box>
            <Button variant={"primaryOutline"}>Contact</Button>
          </Box>
          <Box>
            <Avatar
              size={["lg", "2xl"]}
              name="Segun Adebayo"
              src="/picture/avatar.png"
            />
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
}

export default Catergories;

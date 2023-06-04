import { useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import CatergoriesPopver from "./Popover";
import { CatergoriesProps } from "@/types";

type AllCatergoryProps = {
  item: string;
  categories:CatergoriesProps[]
};

function AllCatergory({ item,categories }: AllCatergoryProps) {
  const [selectedCatergory,setSelectedCatergory]=useState<CatergoriesProps|undefined>({
    name:"",
    activities:[{
      title:""
    }]
  })
  const [isHovered, setIsHovered] = useState(false);

  const style = {
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

  const handleClick=(categoryName:string)=>{
    let category= categories.find((item)=>{
      return item.name==categoryName
    })
    setSelectedCatergory(category)
  }

  return (
    <>
      <CatergoriesPopver selectedCatergory={selectedCatergory} >
        <Box
          bg={"#fff"}
          borderRadius={"10px"}
          p="24px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w="100%"
          mb="10px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={()=>{
            handleClick(item)
          }}
        >
          <Text>{item}</Text>
          <Image src="/icons/arrow_forward.png" alt="Arrow" style={style} />
        </Box>
      </CatergoriesPopver>
    </>
  );
}

export default AllCatergory;

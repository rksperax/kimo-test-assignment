import React from "react";
import {
  PopoverProps,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { CatergoriesProps } from "@/types";
import { colors } from "@/constants/colors";
import useMediaQuery from "@/hooks/useMediaQuery";

type CatergoriesPopverProps = PopoverProps & {
  children: React.ReactNode;
  selectedCatergory: CatergoriesProps | undefined;
};

const CatergoriesPopver: React.FC<CatergoriesPopverProps> = ({
  children,
  selectedCatergory,
}) => {
    const {isLg}=useMediaQuery()

  return (
    <Popover placement={ isLg ? "right-end":"auto"}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader fontWeight={700} fontSize={"22px"} color={colors.green}>{selectedCatergory?.name}</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <List spacing={3}>
            {selectedCatergory?.activities?.map(({ title }) => {
              return (
                <ListItem key={title}>
                  <ListIcon as={InfoIcon} color="green.500" />
                  {title}
                </ListItem>
              );
            })}
          </List>
        </PopoverBody>
        {/* <PopoverFooter>This is the footer</PopoverFooter> */}
      </PopoverContent>
    </Popover>
  );
};

export default CatergoriesPopver;

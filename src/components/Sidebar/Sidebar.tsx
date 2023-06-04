import {
  Image,
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
} from "@chakra-ui/react";

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sideBarItems = ["Home", "Surfing", "Hula", "Vulcano"];
  return (
    <Box display={["block", "none"]}>
      <Image src="/icons/menu.png" alt="Menu" onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Box mt={20}>
              {sideBarItems.map((item) => {
                return <Text mb={"36px"} key={item}>{item}</Text>;
              })}
              <Button variant={"primary"}>Book a trip</Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SideBar;

import { extendTheme } from "@chakra-ui/react";
import { buttonStyles as Button } from "./button";
export const theme = extendTheme({
  components: {
    Button,
  },
  fonts: {
    body: "IBM Plex Mono, monospace",
  },
});

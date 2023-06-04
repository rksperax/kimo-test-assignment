import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../components/Theme/index";
import { ChakraProvider } from "@chakra-ui/react";
import Swiper, {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Pagination, Navigation, FreeMode, Mousewheel, Autoplay]);


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

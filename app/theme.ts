import { extendTheme } from "@chakra-ui/react";
import "@fontsource/libre-baskerville";

const theme = extendTheme({
  fonts: {
    heading: `'Libre Baskerville', serif`,
    body: `'Libre Baskerville', serif`,
  },
});

export default theme;

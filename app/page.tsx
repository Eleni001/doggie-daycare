import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import Services from "./Services";
import Testemonials from "./Testemonials";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Services />
      <Testemonials />
    </Box>
  );
}

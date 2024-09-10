"use client";

import {
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "https://images.unsplash.com/photo-1556866261-8763a7662333?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      fontFamily="body"
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "24px", md: "39px" })}
          >
            Doggie Daycare, Where Your Dog Feels Home Away From Home!
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"#006838"}
              color={"white"}
              fontSize={"15px"}
              _hover={{ bg: "#939598" }}
            >
              Application
            </Button>
            <Button
              bg={"#006838"}
              color={"white"}
              fontSize={"15px"}
              _hover={{ bg: "#939598" }}
            >
              Bookings
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

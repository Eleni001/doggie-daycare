"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaShower } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { IoCut } from "react-icons/io5";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"white"}
        borderWidth={2}
        borderColor={"#939598"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={"bold"} fontFamily={"body"}>
        {title}
      </Text>
      <Text color={"#333333"} fontFamily={"body"}>
        {text}
      </Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={14}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        fontFamily={"body"}
      >
        <Heading fontSize={useBreakpointValue({ base: "24px", md: "39px" })}>
          Let Us Take Care Of Your Dog
        </Heading>
        <Text
          color={"#333333"}
          fontSize={useBreakpointValue({ base: "15px", md: "24px" })}
          fontWeight={useBreakpointValue({ base: "bold", md: "regular" })}
          py={8}
        >
          Do you want to give your dog something extra while it is with us? We
          also have the following services
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} py={8}>
        <Feature
          icon={<Icon as={GiSittingDog} w={10} h={10} color="#006838" />}
          title={"Dog Courses"}
          text={
            "Doggie offers a variety of dog courses for you who want to have a better interaction with your dog, while having fun together and learning useful and useful things."
          }
        />
        <Feature
          icon={
            <Icon as={IoCut} w={10} h={10} color="#006838" outline="gray" />
          }
          title={"Claw Trimming"}
          text={
            "Not only we cut clows of our little guests, we can even remind you when it is time to book a new appointment."
          }
        />
        <Feature
          icon={<Icon as={FaShower} w={10} h={10} color="#006838" />}
          title={"Dog Bath"}
          text={
            "We use lukewarm water organic dog shapoo to gently clean their coat. We speak calmly to reassure your dog and offer treats for a positive experience."
          }
        />
      </SimpleGrid>
    </Box>
  );
}

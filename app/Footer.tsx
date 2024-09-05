"use client";

import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      /* bg={useColorModeValue('gray.50', 'gray.900')} */
      color={"#333333"}
      borderTop="1px solid"
      borderColor="#939598"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About Us
            </Box>
            <Box as="a" href={"#"}>
              Careers
            </Box>
            <Box as="a" href={"#"}>
              Contact Us
            </Box>
            <Box as="a" href={"#"}>
              Partners
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Terms & Policies</ListHeader>
            <Box as="a" href={"#"}>
              Daycare Policies
            </Box>
            <Box as="a" href={"#"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Cookies Policy
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Book or Apply</ListHeader>
            <Box as="a" href={"#"}>
              Daycare Application
            </Box>
            <Box as="a" href={"#"}>
              Book for Daycare
            </Box>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Box as="a" href={"#"}>
                Book for Dog Bath
              </Box>
              <Tag size={"sm"} bg="#006838" ml={2} color={"white"}>
                New
              </Tag>
            </Stack>
            <Box as="a" href={"#"}>
              Book for Claw Trimming
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Adress</ListHeader>
            <Box>Doggie Daycare</Box>
            <Box>Puppies Street 1</Box>
            <Box>123 45 Gothenburg</Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "#939598",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "#939598",
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image
            src="./logo.png"
            alt="logo"
            height={{ base: "40px", md: "60px" }}
            width="auto"
            objectFit="contain"
            maxW="100%"
          />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © Doggie Daycare AB - 2024 | ORG: 555321-9867
        </Text>
      </Box>
    </Box>
  );
}

"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Links = ["Home", "About", "Contact"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        color: "#006838",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} m={12}>
        <Flex
          direction={{ base: "row", md: "column" }}
          h={{ base: "auto", md: 16 }}
          alignItems={{ base: "center", md: "center" }}
          justifyContent={{ base: "space-between", md: "center" }}
        >
          <Box
            display="flex"
            justifyContent={{ base: "flex-start", md: "center" }}
            w="100%"
            alignItems="center"
            mb={4}
          >
            <Image
              src="./logo.png"
              alt="logo"
              height={{ base: "40px", md: "60px" }}
              width="auto"
              objectFit="contain"
              maxW="100%"
            />
          </Box>

          <IconButton
            bg="white"
            color="green"
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ base: "flex", md: "none" }}
            alignSelf={{ base: "center", md: "flex-end" }}
            mt={{ base: 0, md: -8 }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            mt={{ base: 4, md: 0 }}
            alignSelf={{ base: "flex-end", md: "center" }}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            alignItems="center"
            justifyContent="center"
            w="100%"
          >
            <Flex direction="column" align="center" justify="center">
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Flex>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

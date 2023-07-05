import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { SocialIconGroup } from "./SocialIconGroup";

export const MobileNavbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const MOBILE_BUTTONS = [
    {
      section: "#music",
      name: "[ Music ]",
    },
    {
      section: "#about",
      name: "[ About ]",
    },
    {
      section: "#contact",
      name: "[ Contact ]",
    },
  ];

  return (
    <>
      <Box height="16">
        <Flex height="100%" alignItems="center" justifyContent="center">
          <Box
            display="flex"
            w="100%"
            alignItems="center"
            justifyContent="flex-start"
            paddingLeft="6"
            height="8"
          >
            <Box boxSize="6">
              <Flex height="100%" alignItems="center" justifyContent="center">
                <IconButton
                  aria-label="Toggle navigation"
                  onClick={onToggle}
                  icon={
                    isOpen ? (
                      <CloseIcon boxSize="4" />
                    ) : (
                      <HamburgerIcon boxSize="5" />
                    )
                  }
                />
              </Flex>
            </Box>
          </Box>

          <Box height="8">
            <Flex
              height="100%"
              alignItems="center"
              justifyContent="center"
              background="inherit"
            >
              <Link href="/">
                <Image src="/hbd_logo_black.png" />
              </Link>
            </Flex>
          </Box>

          {/* Empty element for spacing */}
          <Box
            display="flex"
            w="100%"
            height="8"
            alignItems="center"
            justifyContent="flex-end"
            paddingRight="6"
          ></Box>
        </Flex>
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <Box padding="4" borderTop="1px" borderColor="gray.300">
          <VStack spacing="6">
            <VStack spacing="4">
              {MOBILE_BUTTONS.map((button) => (
                <Link key={button.name} href={button.section}>
                  <Button onClick={onToggle}>
                    <Text as="h2" fontSize="xl">
                      {button.name}
                    </Text>
                  </Button>
                </Link>
              ))}
            </VStack>
            <SocialIconGroup size="lg" />
          </VStack>
        </Box>
      </Collapse>
    </>
  );
};

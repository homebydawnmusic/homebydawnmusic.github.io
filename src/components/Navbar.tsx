import { Box, Button, ButtonGroup, Flex, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { SocialIconGroup } from "./SocialIconGroup";

export const Navbar: React.FC = () => {
  const [isSectionButtonGroupHovered, setIsSectionButtonGroupHovered] =
    useState(false);
  const [isHomeButtonHovered, setIsHomeButtonHovered] = useState(false);
  const [isAboutButtonHovered, setIsAboutButtonHovered] = useState(false);
  const [isMusicButtonHovered, setIsMusicButtonHovered] = useState(false);
  const [isContactButtonHovered, setIsContactButtonHovered] = useState(false);

  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <Box padding="4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Flex justifyContent="center">
          <Box
            display="flex"
            w="100%"
            alignItems="center"
            justifyContent="flex-start"
            paddingLeft="2"
          >
            <ButtonGroup
              spacing="8"
              onMouseEnter={() => setIsSectionButtonGroupHovered(true)}
              onMouseLeave={() => setIsSectionButtonGroupHovered(false)}
            >
              <Link href="#home">
                <Button
                  opacity={
                    !isSectionButtonGroupHovered || isHomeButtonHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsHomeButtonHovered(true)}
                  onMouseLeave={() => setIsHomeButtonHovered(false)}
                  transition=".2s"
                >
                  HOME
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  opacity={
                    !isSectionButtonGroupHovered || isAboutButtonHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsAboutButtonHovered(true)}
                  onMouseLeave={() => setIsAboutButtonHovered(false)}
                  transition=".2s"
                >
                  ABOUT
                </Button>
              </Link>
              <Link href="#music">
                <Button
                  opacity={
                    !isSectionButtonGroupHovered || isMusicButtonHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsMusicButtonHovered(true)}
                  onMouseLeave={() => setIsMusicButtonHovered(false)}
                  transition=".2s"
                >
                  MUSIC
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  opacity={
                    !isSectionButtonGroupHovered || isContactButtonHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsContactButtonHovered(true)}
                  onMouseLeave={() => setIsContactButtonHovered(false)}
                  transition=".2s"
                >
                  CONTACT
                </Button>
              </Link>
            </ButtonGroup>
          </Box>

          <Box
            opacity={isLogoHovered ? ".6" : "1"}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            transition=".2s"
          >
            <Link href="/">
              <Image src="/hbd_logo_black_small.png" />
            </Link>
          </Box>

          <Box
            display="flex"
            w="100%"
            alignItems="center"
            justifyContent="flex-end"
            paddingRight="2"
          >
            <SocialIconGroup />
          </Box>
        </Flex>
      </motion.div>
    </Box>
  );
};

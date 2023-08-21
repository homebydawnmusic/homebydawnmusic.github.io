import { Box, Button, ButtonGroup, Flex, Image, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { SocialIconGroup } from "../common/SocialIconGroup";

export const DesktopNavbar: React.FC = () => {
  const [isSectionButtonGroupHovered, setIsSectionButtonGroupHovered] =
    useState(false);
  const [isMusicButtonHovered, setIsMusicButtonHovered] = useState(false);
  const [isAboutButtonHovered, setIsAboutButtonHovered] = useState(false);
  const [isContactButtonHovered, setIsContactButtonHovered] = useState(false);

  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const DESKTOP_BUTTONS = [
    {
      section: "#music",
      name: "[ MUSIC ]",
      state: isMusicButtonHovered,
      setter: setIsMusicButtonHovered,
    },
    {
      section: "#about",
      name: "[ ABOUT ]",
      state: isAboutButtonHovered,
      setter: setIsAboutButtonHovered,
    },
    {
      section: "#contact",
      name: "[ CONTACT ]",
      state: isContactButtonHovered,
      setter: setIsContactButtonHovered,
    },
  ];

  return (
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
          <ButtonGroup
            spacing="8"
            onMouseEnter={() => setIsSectionButtonGroupHovered(true)}
            onMouseLeave={() => setIsSectionButtonGroupHovered(false)}
          >
            {DESKTOP_BUTTONS.map((button) => (
              <Box key={button.name}>
                <Link href={button.section}>
                  <Button
                    opacity={
                      !isSectionButtonGroupHovered || button.state ? "1" : ".5"
                    }
                    onMouseEnter={() => button.setter(true)}
                    onMouseLeave={() => button.setter(false)}
                    transition=".2s"
                  >
                    {button.name}
                  </Button>
                </Link>
              </Box>
            ))}
          </ButtonGroup>
        </Box>

        <Box
          opacity={isLogoHovered ? ".6" : "1"}
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
          transition=".2s"
          height="8"
        >
          <Flex height="100%" alignItems="center">
            <Link href="/">
              <Image src="/hbd_logo_black.png" />
            </Link>
          </Flex>
        </Box>

        <Box
          display="flex"
          w="100%"
          height="8"
          alignItems="center"
          justifyContent="flex-end"
          paddingRight="6"
        >
          <SocialIconGroup />
        </Box>
      </Flex>
    </Box>
  );
};

import { Box, Button, ButtonGroup, Flex, Image, Link } from "@chakra-ui/react";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [isSectionButtonGroupHovered, setIsSectionButtonGroupHovered] =
    useState(false);
  const [isHomeButtonHovered, setIsHomeButtonHovered] = useState(false);
  const [isAboutButtonHovered, setIsAboutButtonHovered] = useState(false);
  const [isMusicButtonHovered, setIsMusicButtonHovered] = useState(false);
  const [isContactButtonHovered, setIsContactButtonHovered] = useState(false);

  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const [isSocialIconGroupHovered, setIsSocialIconGroupHovered] =
    useState(false);
  const [isFacebookIconHovered, setIsFacebookIconHovered] = useState(false);
  const [isTwitterIconHovered, setIsTwitterIconHovered] = useState(false);
  const [isInstagramIconHovered, setIsInstagramIconHovered] = useState(false);
  const [isYouTubeIconHovered, setIsYouTubeIconHovered] = useState(false);
  const [isTikTokIconHovered, setIsTikTokIconHovered] = useState(false);

  return (
    <div className="navbar">
      <Box padding="4" borderBottom="1px" borderColor="gray">
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
                <Image src="/hbd_logo.png" />
              </Link>
            </Box>

            <Box
              display="flex"
              w="100%"
              alignItems="center"
              justifyContent="flex-end"
              paddingRight="2"
            >
              <ButtonGroup
                spacing="8"
                onMouseEnter={() => setIsSocialIconGroupHovered(true)}
                onMouseLeave={() => setIsSocialIconGroupHovered(false)}
              >
                <Box
                  opacity={
                    !isSocialIconGroupHovered || isFacebookIconHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsFacebookIconHovered(true)}
                  onMouseLeave={() => setIsFacebookIconHovered(false)}
                  transition=".2s"
                >
                  <Link
                    href="https://facebook.com/homebydawnmusic"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </Box>
                <Box
                  opacity={
                    !isSocialIconGroupHovered || isTwitterIconHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsTwitterIconHovered(true)}
                  onMouseLeave={() => setIsTwitterIconHovered(false)}
                  transition=".2s"
                >
                  <Link
                    href="https://twitter.com/homebydawnmusic"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </Box>
                <Box
                  opacity={
                    !isSocialIconGroupHovered || isInstagramIconHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsInstagramIconHovered(true)}
                  onMouseLeave={() => setIsInstagramIconHovered(false)}
                  transition=".2s"
                >
                  <Link
                    href="https://instagram.com/homebydawnmusic"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </Box>
                <Box
                  opacity={
                    !isSocialIconGroupHovered || isYouTubeIconHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsYouTubeIconHovered(true)}
                  onMouseLeave={() => setIsYouTubeIconHovered(false)}
                  transition=".2s"
                >
                  <Link
                    href="https://youtube.com/@homebydawnmusic"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </Box>
                <Box
                  opacity={
                    !isSocialIconGroupHovered || isTikTokIconHovered
                      ? "1"
                      : ".5"
                  }
                  onMouseEnter={() => setIsTikTokIconHovered(true)}
                  onMouseLeave={() => setIsTikTokIconHovered(false)}
                  transition=".2s"
                >
                  <Link
                    href="https://tiktok.com/@homebydawnmusic"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </Link>
                </Box>
              </ButtonGroup>
            </Box>
          </Flex>
        </motion.div>
      </Box>
    </div>
  );
};

import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Home: React.FC = () => {
  const [isGifActive, setIsGifActive] = useState(true);
  const [isPngActive, setIsPngActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGifActive(false);
      setIsPngActive(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      height="100vh"
      backgroundImage="./hbd_home.png"
      backgroundPosition="center"
    >
      <Flex
        height="100%"
        justifyContent="center"
        alignItems="center"
        backgroundColor="transparent"
      >
        <Box width="90%" maxWidth="864px" backgroundColor="inherit">
          <Image
            src="/hbd_logo_white.gif"
            alt="Home By Dawn logo"
            backgroundColor="inherit"
            style={isGifActive ? {} : { display: "none" }}
          />
          <Image
            src="/hbd_logo_white.png"
            alt="Home By Dawn logo"
            backgroundColor="inherit"
            style={isPngActive ? {} : { display: "none" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

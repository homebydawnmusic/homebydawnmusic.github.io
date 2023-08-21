import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export interface HomeProps {
  handleLoad: () => void;
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const [isGifActive, setIsGifActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGifActive(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      height="100vh"
      backgroundImage="./hbd_home.png"
      backgroundPosition="center"
      minHeight="100vh"
      minWidth="100vw"
      backgroundSize="cover"
      onLoad={props.handleLoad}
    >
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Box width="90%" maxWidth="864px">
          <Image
            src="/hbd_logo_white.gif"
            alt="Home By Dawn logo"
            style={isGifActive ? {} : { display: "none" }}
          />
          <Image
            src="/hbd_logo_white.png"
            alt="Home By Dawn logo"
            style={isGifActive ? { display: "none" } : {}}
          />
        </Box>
      </Flex>
    </Box>
  );
};

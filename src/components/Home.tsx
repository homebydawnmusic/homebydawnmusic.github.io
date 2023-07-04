import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Home: React.FC = () => (
  <Box
    height="100vh"
    backgroundImage="./hbd_home.png"
    backgroundPosition="center"
  >
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="transparent"
    >
      <Heading backgroundColor="inherit">Home By Dawn</Heading>
    </Flex>
  </Box>
);

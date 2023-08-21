import { Flex } from "@chakra-ui/react";
import React from "react";
import { ScaleLoader } from "react-spinners";

export const Loading: React.FC = () => (
  <Flex height="100vh" justifyContent="center" alignItems="center">
    <ScaleLoader
      margin="8px"
      height="64px"
      width="8px"
      radius="16px"
      color="#e0841f"
    />
  </Flex>
);

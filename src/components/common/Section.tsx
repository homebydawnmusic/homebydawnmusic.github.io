import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export interface SectionProps {
  name: string;
  title: string;
  textColor?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = (props: SectionProps) => (
  <section id={props.name}>
    <Box
      padding="16"
      backgroundImage={props.backgroundImage ?? ""}
      backgroundPosition={props.backgroundPosition ?? ""}
      backgroundSize="cover"
      minHeight={props.backgroundImage ? "100vh" : ""}
      minWidth={props.backgroundImage ? "100vw" : ""}
    >
      <VStack spacing={[8, 8, 16]}>
        <Heading
          as="h1"
          fontSize={{ base: "4xl", sm: "5xl" }}
          textColor={props.textColor ?? ""}
          textAlign="center"
        >
          {props.title}
        </Heading>
        {props.children}
      </VStack>
    </Box>
  </section>
);

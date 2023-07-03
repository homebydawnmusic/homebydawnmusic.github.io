import { Box, Heading, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export interface SectionProps {
  name: string;
  title: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = (props: SectionProps) => (
  <section id={props.name}>
    <Box padding="16">
      <Stack spacing="16">
        <Heading as="h1" size="2xl" textAlign="center">
          {props.title}
        </Heading>
        {props.children}
      </Stack>
    </Box>
  </section>
);

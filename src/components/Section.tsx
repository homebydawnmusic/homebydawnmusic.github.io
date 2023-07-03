import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export interface SectionProps {
  name: string;
  title: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = (props: SectionProps) => (
  <section title={props.name}>
    <Center>
      <Stack>
        <Box margin="16">
          <Heading as="h1" size="2xl">
            {props.title}
          </Heading>
        </Box>
        {props.children}
      </Stack>
    </Center>
  </section>
);

import { Box, Button, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Section } from "./Section";
import { SocialIconGroup } from "./SocialIconGroup";

export const Contact: React.FC = () => {
  const [isMailButtonHovered, setIsMailButtonHovered] = useState(false);

  return (
    <Section name="contact" title="[ Contact ]">
      <Box height="40vh">
        <Flex height="100%" alignItems="center" justifyContent="center">
          <VStack spacing="8">
            <SocialIconGroup size="2x" />
            <Heading as="h2" fontSize="2xl">
              Booking and Inquiries
            </Heading>
            <Link href="mailto:homebydawnmusic@gmail.com">
              <Button
                opacity={isMailButtonHovered ? ".5" : "1"}
                onMouseEnter={() => setIsMailButtonHovered(true)}
                onMouseLeave={() => setIsMailButtonHovered(false)}
                transition=".2s"
              >
                homebydawnmusic@gmail.com
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Box>
    </Section>
  );
};

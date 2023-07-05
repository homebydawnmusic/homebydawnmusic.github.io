import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Section } from "./Section";
import { SocialIconGroup } from "./SocialIconGroup";

export const Contact: React.FC = () => {
  const [isMailButtonHovered, setIsMailButtonHovered] = useState(false);

  return (
    <Section
      name="contact"
      title="[ CONTACT ]"
      textColor="#f3f0e7"
      backgroundImage="./hbd_contact.png"
      backgroundPosition="center"
    >
      <Box height="70vh">
        <Flex height="100%" alignItems="center" justifyContent="center">
          <VStack spacing="8">
            <SocialIconGroup size="2x" color="#f3f0e7" />
            <Heading
              as="h2"
              textColor="#f3f0e7"
              textAlign="center"
              fontSize="2xl"
              fontWeight="bold"
            >
              Booking and Inquiries
            </Heading>
            <Link href="mailto:homebydawnmusic@gmail.com">
              <Button
                opacity={isMailButtonHovered ? ".5" : "1"}
                onMouseEnter={() => setIsMailButtonHovered(true)}
                onMouseLeave={() => setIsMailButtonHovered(false)}
                transition=".2s"
              >
                <Text textColor="#f3f0e7" fontSize="lg">
                  homebydawnmusic@gmail.com
                </Text>
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Box>
    </Section>
  );
};

import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Section } from "../common/Section";

export const About: React.FC = () => (
  <Section name="about" title="[ ABOUT ]">
    <Flex justifyContent="center">
      <Box width="80vw" maxWidth="864px">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={[8, 8, 16]}>
          <Image
            borderRadius="full"
            src="/hbd_avatar.jpg"
            alt="Home By Dawn avatar"
          />
          <Text fontSize="lg">
            Home By Dawn is a youthful and energetic music producer from Los
            Angeles. Since launching his career in 2022, he is already breaking
            through the electronic dance community with a motive to continue
            spreading progressive house, the beloved genre of powerful chords
            and emotional melodies, with his own modern twist. Home By Dawn has
            quickly garnered the support of music lovers worldwide with
            uplifting tracks such as “You Are My Love” and most notably, “Wild,”
            which has collected over 100,000 streams on Spotify and landed on
            editorial playlists such as Electro House Mix. Even though
            relatively new to the scene, he is ready to take on the big stages.
            His fervent sentiment for musicianship and artistry fuels his drive
            to grow and become better each day as a musician. Home By Dawn is
            set to have his biggest year yet.
          </Text>
        </SimpleGrid>
      </Box>
    </Flex>
  </Section>
);

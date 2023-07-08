import { Box, ButtonGroup, Flex, Link, VStack } from "@chakra-ui/react";
import {
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MediaPlayer } from "./MediaPlayer";
import { Section } from "../common/Section";

export const Music: React.FC = () => {
  const [isButtonGroupHovered, setIsButtonGroupHovered] = useState(false);
  const [isSpotifyIconHovered, setIsSpotifyIconHovered] = useState(false);
  const [isSoundCloudIconHovered, setIsSoundCloudIconHovered] = useState(false);
  const [isYouTubeIconHovered, setIsYouTubeIconHovered] = useState(false);

  return (
    <Section name="music" title="[ MUSIC ]">
      <Flex justifyContent="center">
        <VStack spacing={[8, 8, 16]}>
          <ButtonGroup
            spacing="8"
            onMouseEnter={() => setIsButtonGroupHovered(true)}
            onMouseLeave={() => setIsButtonGroupHovered(false)}
          >
            <Box
              opacity={
                !isButtonGroupHovered || isSpotifyIconHovered ? "1" : ".5"
              }
              onMouseEnter={() => setIsSpotifyIconHovered(true)}
              onMouseLeave={() => setIsSpotifyIconHovered(false)}
              transition=".2s"
            >
              <Link
                href="https://open.spotify.com/artist/6g747HiZMhVxVcQS1t8LI4?si=deo-yywKT3OqecXcWTF4KA"
                target="_blank"
              >
                <FontAwesomeIcon icon={faSpotify} size="2x" />
              </Link>
            </Box>
            <Box
              opacity={
                !isButtonGroupHovered || isSoundCloudIconHovered ? "1" : ".5"
              }
              onMouseEnter={() => setIsSoundCloudIconHovered(true)}
              onMouseLeave={() => setIsSoundCloudIconHovered(false)}
              transition=".2s"
            >
              <Link
                href="https://soundcloud.com/homebydawnmusic"
                target="_blank"
              >
                <FontAwesomeIcon icon={faSoundcloud} size="2x" />
              </Link>
            </Box>
            <Box
              opacity={
                !isButtonGroupHovered || isYouTubeIconHovered ? "1" : ".5"
              }
              onMouseEnter={() => setIsYouTubeIconHovered(true)}
              onMouseLeave={() => setIsYouTubeIconHovered(false)}
              transition=".2s"
            >
              <Link href="https://youtube.com/@homebydawnmusic" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Link>
            </Box>
          </ButtonGroup>
          <Box width="80vw" maxWidth="896px">
            <MediaPlayer />
          </Box>
        </VStack>
      </Flex>
    </Section>
  );
};

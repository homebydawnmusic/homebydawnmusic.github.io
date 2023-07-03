import { Box, ButtonGroup, Link } from "@chakra-ui/react";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface SocialIconGroupProps {
  size?: SizeProp;
}

export const SocialIconGroup: React.FC<SocialIconGroupProps> = (
  props: SocialIconGroupProps
) => {
  const [isSocialIconGroupHovered, setIsSocialIconGroupHovered] =
    useState(false);
  const [isFacebookIconHovered, setIsFacebookIconHovered] = useState(false);
  const [isTwitterIconHovered, setIsTwitterIconHovered] = useState(false);
  const [isInstagramIconHovered, setIsInstagramIconHovered] = useState(false);
  const [isYouTubeIconHovered, setIsYouTubeIconHovered] = useState(false);
  const [isTikTokIconHovered, setIsTikTokIconHovered] = useState(false);

  const size = props.size ?? "sm";

  return (
    <ButtonGroup
      spacing="8"
      onMouseEnter={() => setIsSocialIconGroupHovered(true)}
      onMouseLeave={() => setIsSocialIconGroupHovered(false)}
    >
      <Box
        opacity={
          !isSocialIconGroupHovered || isFacebookIconHovered ? "1" : ".5"
        }
        onMouseEnter={() => setIsFacebookIconHovered(true)}
        onMouseLeave={() => setIsFacebookIconHovered(false)}
        transition=".2s"
      >
        <Link href="https://facebook.com/homebydawnmusic" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} size={size} />
        </Link>
      </Box>
      <Box
        opacity={!isSocialIconGroupHovered || isTwitterIconHovered ? "1" : ".5"}
        onMouseEnter={() => setIsTwitterIconHovered(true)}
        onMouseLeave={() => setIsTwitterIconHovered(false)}
        transition=".2s"
      >
        <Link href="https://twitter.com/homebydawnmusic" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size={size} />
        </Link>
      </Box>
      <Box
        opacity={
          !isSocialIconGroupHovered || isInstagramIconHovered ? "1" : ".5"
        }
        onMouseEnter={() => setIsInstagramIconHovered(true)}
        onMouseLeave={() => setIsInstagramIconHovered(false)}
        transition=".2s"
      >
        <Link href="https://instagram.com/homebydawnmusic" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size={size} />
        </Link>
      </Box>
      <Box
        opacity={!isSocialIconGroupHovered || isYouTubeIconHovered ? "1" : ".5"}
        onMouseEnter={() => setIsYouTubeIconHovered(true)}
        onMouseLeave={() => setIsYouTubeIconHovered(false)}
        transition=".2s"
      >
        <Link href="https://youtube.com/@homebydawnmusic" target="_blank">
          <FontAwesomeIcon icon={faYoutube} size={size} />
        </Link>
      </Box>
      <Box
        opacity={!isSocialIconGroupHovered || isTikTokIconHovered ? "1" : ".5"}
        onMouseEnter={() => setIsTikTokIconHovered(true)}
        onMouseLeave={() => setIsTikTokIconHovered(false)}
        transition=".2s"
      >
        <Link href="https://tiktok.com/@homebydawnmusic" target="_blank">
          <FontAwesomeIcon icon={faTiktok} size={size} />
        </Link>
      </Box>
    </ButtonGroup>
  );
};

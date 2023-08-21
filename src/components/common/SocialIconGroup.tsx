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
  color?: string;
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

  const SOCIALS = [
    {
      link: "https://facebook.com/homebydawnmusic",
      icon: faFacebookF,
      size: size,
      state: isFacebookIconHovered,
      setter: setIsFacebookIconHovered,
    },
    {
      link: "https://twitter.com/homebydawnmusic",
      icon: faTwitter,
      size: size,
      state: isTwitterIconHovered,
      setter: setIsTwitterIconHovered,
    },
    {
      link: "https://instagram.com/homebydawnmusic",
      icon: faInstagram,
      size: size,
      state: isInstagramIconHovered,
      setter: setIsInstagramIconHovered,
    },
    {
      link: "https://youtube.com/@homebydawnmusic",
      icon: faYoutube,
      size: size,
      state: isYouTubeIconHovered,
      setter: setIsYouTubeIconHovered,
    },
    {
      link: "https://tiktok.com/@homebydawnmusic",
      icon: faTiktok,
      size: size,
      state: isTikTokIconHovered,
      setter: setIsTikTokIconHovered,
    },
  ];

  return (
    <ButtonGroup
      spacing="8"
      onMouseEnter={() => setIsSocialIconGroupHovered(true)}
      onMouseLeave={() => setIsSocialIconGroupHovered(false)}
    >
      {SOCIALS.map((social) => (
        <Box
          key={social.link}
          opacity={!isSocialIconGroupHovered || social.state ? "1" : ".5"}
          onMouseEnter={() => social.setter(true)}
          onMouseLeave={() => social.setter(false)}
          transition=".2s"
        >
          <Link href={social.link} target="_blank">
            <FontAwesomeIcon
              icon={social.icon}
              size={size}
              color={props.color ?? ""}
            />
          </Link>
        </Box>
      ))}
    </ButtonGroup>
  );
};

import { HStack, Show, VStack } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player/soundcloud";
import { Spotify } from "react-spotify-embed";

interface SpotifyAndSoundcloudProps {
  isSpotifyWide?: boolean;
  soundCloudPlayerHeight?: string | number;
}

const SpotifyAndSoundcloud: React.FC<SpotifyAndSoundcloudProps> = (
  props: SpotifyAndSoundcloudProps
) => (
  <>
    <Spotify
      link="https://open.spotify.com/artist/6g747HiZMhVxVcQS1t8LI4?si=f8NSupLmRJujp9vu8_smxg"
      wide={props.isSpotifyWide}
    />
    <ReactPlayer
      url="https://soundcloud.com/homebydawnmusic/sets/discography"
      width="100%"
      height={props.soundCloudPlayerHeight ?? "100%"}
    />
  </>
);

const DesktopMediaPlayer: React.FC = () => (
  <HStack spacing="16" height="100%">
    <SpotifyAndSoundcloud />
  </HStack>
);

const MobileMediaPlayer: React.FC = () => (
  <VStack spacing="16" height="100%">
    <SpotifyAndSoundcloud isSpotifyWide soundCloudPlayerHeight="40vh" />
  </VStack>
);

export const MediaPlayer: React.FC = () => (
  <>
    <Show above="md">
      <DesktopMediaPlayer />
    </Show>
    <Show below="md">
      <MobileMediaPlayer />
    </Show>
  </>
);

import { Box, ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import { About } from "./components/about/About";
import { FadeInMotion } from "./components/common/FadeInMotion";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/home/Home";
import { Music } from "./components/music/Music";
import { Navbar } from "./components/navbar/Navbar";
import { Loading } from "./components/loading/Loading";

const theme = extendBaseTheme({
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      "html, body": {
        backgroundColor: "#f3f0e7",
        scrollBehavior: "smooth",
        fontFamily: "'Inconsolata', sans-serif",
        overflowX: "hidden",
      },
      h1: {
        fontFamily: "'Reem Kufi Ink', sans-serif",
      },
    },
  },
});

const App: React.FC = () => {
  const [isHomeLoaded, setIsHomeLoaded] = useState(false);
  const [isAboutLoaded, setIsAboutLoaded] = useState(false);

  const handleHomeLoad = () => {
    setIsHomeLoaded(true);
  };

  const handleAboutLoad = () => {
    setIsAboutLoaded(true);
  };

  return (
    <ChakraBaseProvider theme={theme}>
      {!isHomeLoaded && !isAboutLoaded && <Loading />}
      <Box display={isHomeLoaded && isAboutLoaded ? "" : "none"}>
        <FadeInMotion duration={1} delay={0}>
          <Navbar />
        </FadeInMotion>
        <FadeInMotion duration={0.5} delay={0.2}>
          <Home handleLoad={handleHomeLoad} />
        </FadeInMotion>
        <FadeInMotion duration={0.5} delay={0.4}>
          <Music />
        </FadeInMotion>
        <FadeInMotion duration={0.5} delay={0.6}>
          <About handleLoad={handleAboutLoad} />
        </FadeInMotion>
        <FadeInMotion duration={0.5} delay={0.8}>
          <Contact />
        </FadeInMotion>
      </Box>
    </ChakraBaseProvider>
  );
};

export default App;

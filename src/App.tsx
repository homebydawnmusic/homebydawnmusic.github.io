import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import * as React from "react";
import { About } from "./components/about/About";
import { FadeInMotion } from "./components/common/FadeInMotion";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/home/Home";
import { Music } from "./components/music/Music";
import { Navbar } from "./components/navbar/Navbar";

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
        fontFamily: "'Instrument Sans', sans-serif",
      },
    },
  },
});

const App: React.FC = () => (
  <ChakraBaseProvider theme={theme}>
    <FadeInMotion duration={1} delay={0}>
      <Navbar />
    </FadeInMotion>
    <FadeInMotion duration={0.5} delay={0.2}>
      <Home />
    </FadeInMotion>
    <FadeInMotion duration={0.5} delay={0.4}>
      <Music />
    </FadeInMotion>
    <FadeInMotion duration={0.5} delay={0.6}>
      <About />
    </FadeInMotion>
    <FadeInMotion duration={0.5} delay={0.8}>
      <Contact />
    </FadeInMotion>
  </ChakraBaseProvider>
);

export default App;

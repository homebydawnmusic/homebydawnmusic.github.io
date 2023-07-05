import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import * as React from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Music } from "./components/Music";
import { Navbar } from "./components/Navbar";
import "./styles/index.scss";
import { FadeInMotion } from "./components/FadeInMotion";

const { Heading } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Heading,
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

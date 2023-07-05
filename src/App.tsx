import { ChakraBaseProvider } from "@chakra-ui/react";
import * as React from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { FadeInMotion } from "./components/FadeInMotion";
import { Home } from "./components/Home";
import { Music } from "./components/Music";
import { Navbar } from "./components/Navbar";
import "./styles/index.scss";

const App: React.FC = () => (
  <ChakraBaseProvider>
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

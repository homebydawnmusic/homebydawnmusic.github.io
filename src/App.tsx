import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import * as React from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Music } from "./components/Music";
import { Navbar } from "./components/Navbar";
import "./styles/index.scss";

const { Heading } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Heading,
  },
});

const App: React.FC = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Navbar />
      <Home />
      <Music />
      <About />
      <Contact />
    </ChakraBaseProvider>
  );
};

export default App;

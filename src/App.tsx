import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import * as React from "react";
import { Contact } from "./components/Contact";
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
      <Music />
      <Contact />
    </ChakraBaseProvider>
  );
};

export default App;

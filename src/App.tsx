import { ChakraBaseProvider } from "@chakra-ui/react";
import * as React from "react";
import { Navbar } from "./components/Navbar";
import "./styles/index.scss";

const App: React.FC = () => {
  let content: JSX.Element[] = [];
  for (let i = 0; i < 100; i++) {
    content.push(<p>hi</p>);
  }

  return (
    <ChakraBaseProvider>
      <Navbar />
      {content}
    </ChakraBaseProvider>
  );
};

export default App;

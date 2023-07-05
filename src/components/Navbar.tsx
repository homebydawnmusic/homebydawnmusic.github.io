import { Show } from "@chakra-ui/react";
import React from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar: React.FC = () => (
  <>
    <Show above="md">
      <DesktopNavbar />
    </Show>
    <Show below="md">
      <MobileNavbar />
    </Show>
  </>
);

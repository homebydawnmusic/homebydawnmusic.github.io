import { Show } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Show above="md">
        <DesktopNavbar />
      </Show>
      <Show below="md">
        <MobileNavbar />
      </Show>
    </motion.div>
  );
};

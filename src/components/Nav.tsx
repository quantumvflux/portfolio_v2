import { useState } from "react";
import { OpenedNav } from "./OpenedNav";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Nav: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav((prevShow) => !prevShow);
  };

  return (
    <>
      <AnimatePresence>
        {showNav && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // zIndex={"modal"}
          >
            <OpenedNav handleShowNav={handleShowNav} />
          </Box>
        )}
      </AnimatePresence>
      <HamburgerIcon
        onClick={handleShowNav}
        color={"white"}
        position={"absolute"}
        top={{ base: 8, sm: 16 }}
        right={{ base: 10, sm: 24 }}
        boxSize={{ base: 8, sm: 8 }}
        zIndex={"banner"}
      />
    </>
  );
};

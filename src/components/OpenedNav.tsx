import { VStack, Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { NavLink } from "./NavLink";

interface Props {
  handleShowNav: HandleShowNav;
}

export const OpenedNav: React.FC<Props> = ({ handleShowNav }) => {
  return (
    <Box
      position={"absolute"}
      height={"100vh"}
      width={"100vw"}
      paddingTop={32}
      backgroundColor={"purple.900"}
      opacity={".98"}
      zIndex={"modal"}
    >
      <CloseIcon
        onClick={handleShowNav}
        position={"absolute"}
        top={{ base: 8, sm: 16 }}
        right={{ base: 10, sm: 24 }}
        color={"white"}
        boxSize={{ base: 8, sm: 8 }}
      />

      <VStack marginLeft={{ base: 6, md: 52 }} align={"start"}>
        <NavLink text="Home" />
        <NavLink text="About me" />
        <NavLink text="Projects" />
        <NavLink text="Contact me" />
      </VStack>
    </Box>
  );
};

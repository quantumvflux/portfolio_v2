import { Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const NavLink: React.FC<Link> = ({ text }) => {
  return (
    <Link
      as={motion.a}
      whileHover={{ scale: "1.02" }}
      whileTap={{ scale: "0.96" }}
      colorScheme={"whiteAlpha"}
      color={"white"}
      fontWeight={"extrabold"}
      fontSize={{ base: "6xl", sm: "8xl" }}
      marginBottom={0}
    >
      {text}
    </Link>
  );
};

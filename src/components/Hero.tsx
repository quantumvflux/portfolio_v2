import img from "./../assets/photo.png";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

import { Box, Text, Heading, Image } from "@chakra-ui/react";

export const Hero: React.FC = () => {
  return (
    <Box
      marginInlineStart={0}
      position={"initial"}
      backgroundColor={"purple.900"}
      height={"100vh"}
    >
      <Box
        paddingLeft={{ base: 4, md: 12 }}
        position={"absolute"}
        right={4}
        top={"72"}
        zIndex={"banner"}
        as={motion.div}
        animation={{ duration: "5s" }}
        opacity={0}
        animate={{ opacity: 1 }}
      >
        <Parallax translateY={[-30, 30]}>
          <Heading fontSize={{ base: "7xl", md: "9xl" }} color={"white"}>
            Marcos Baravalle
          </Heading>
          <Text
            fontWeight={"light"}
            fontSize={{ base: "5xl", md: "6xl" }}
            color={"white"}
          >
            React Developer
          </Text>
        </Parallax>
      </Box>
      <Box>
        <Image
          boxSize={"xl"}
          marginLeft={{ base: 0, md: 16 }}
          objectFit={"contain"}
          zIndex={"base"}
          src={img}
          paddingX={{ base: 4 }}
        />
      </Box>
    </Box>
  );
};

import { Stack, Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <Box color={"white"} backgroundColor={"blackAlpha.900"} height={"50vh"}>
      <Box
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Box width={"60%"} margin={"auto"}>
          <Heading textAlign={"center"} padding={4}>
            Contact me
          </Heading>
          <Text textAlign={"center"}>
            Do you want to work with me?
            <br /> I think we can make a great team!
          </Text>
        </Box>
        <Box width={"50%"} margin={"auto"}>
          <Stack
            marginTop={4}
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={2}
          >
            <Link href="https://github.com/quantumvflux" target={"_blank"}>
              <Button colorScheme={"blackAlpha"} width={64}>
                Github
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/marcos-baravalle-644ab4233/"
              target={"_blank"}
            >
              <Button colorScheme={"linkedin"} width={64}>
                LinkedIn
              </Button>
            </Link>
            <Link
              href="https://discordapp.com/users/696436407283089443"
              target={"_blank"}
            >
              <Button colorScheme={"whiteAlpha"} width={64}>
                Discord
              </Button>
            </Link>
            <Link
              href="https://open.spotify.com/user/marcosfloyd73?si=eed0717e9efb4be6"
              target={"_blank"}
            >
              <Button colorScheme={"whatsapp"} width={64}>
                Spotify
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

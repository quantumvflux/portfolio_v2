import { Box, Text, Heading, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <Box backgroundColor={"blackAlpha.900"} paddingY={8} textAlign={"center"}>
      <Box
        as={motion.div}
        animate={{ dur: "5s" }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Heading color={"white"}>About me</Heading>
        <Box width={{ base: "90%", md: "50%" }} marginX={"auto"} marginY={8}>
          <Text color={"white"} textAlign={"justify"}>
            Hi, I'm Marcos! a freelance web developer from Argentina looking to
            build digital marketing solutions for your enterprise or personal
            brand. There's no impossible solutions, there's no limit!
            <br />I really really like technology, enterprenourship, video
            games, music and economics, which leads me to think i'm a very open
            person :D
          </Text>
          <Heading color={"white"} fontSize={"3xl"} padding={4}>
            Choose your character!
          </Heading>
          <Text color={"white"}>Some abilities i have</Text>

          <Stack
            direction={{ base: "column", md: "row" }}
            gap={4}
            marginX={"auto"}
            marginY={8}
            width={"90%"}
            justify={"center"}
            align={"center"}
          >
            <Skills
              skillName="Typescript"
              skillDescription="To maintain all my apps scalable and my code reliable"
              imgUrl="https://media3.giphy.com/media/WrsrFDf9h2z4qJl1vA/giphy.gif?cid=790b7611c5df3f3923883e88973d085a0f3e1e9f7cc9ef50&rid=giphy.gif&ct=s"
            />
            <Skills
              skillName="React"
              skillDescription="To make my creations stronger and faster"
              imgUrl="https://media1.giphy.com/media/USnCzQgQcYBdRyfCz9/giphy.gif?cid=ecf05e47djna3sbgaksprjdv8u81vicgig2ic0h5ih3qvuh5&rid=giphy.gif&ct=s"
            />
            <Skills
              skillName="ChakraUI"
              skillDescription="To make my websites and webapps beautiful"
              imgUrl="https://media3.giphy.com/media/fUGyRQM7pJgehTQFeP/giphy.gif?cid=ecf05e47djna3sbgaksprjdv8u81vicgig2ic0h5ih3qvuh5&rid=giphy.gif&ct=s"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

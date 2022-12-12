import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import project1 from "./../assets/nephilim.jpg";
import project2 from "./../assets/project2.jpg";
import project3 from "./../assets/project3.jpg";

export const Projects = () => {
  return (
    <Box color={"white"} backgroundColor={"purple.900"} paddingY={8}>
      <Box
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Box marginX={"auto"} width={{ base: "90%", md: "50%" }}>
          <Heading padding={4} textAlign={"center"}>
            Projects
          </Heading>
          <Text textAlign={"center"} marginBottom={8}>
            Some projects I have worked on
          </Text>
        </Box>
        <Stack
          gap={8}
          width={"60%"}
          margin={"auto"}
          direction={{ base: "column", md: "row" }}
        >
          <ProjectCard
            projectLink="https://www.nephilimoficial.com"
            title={"Nephilim | Official Site"}
            img={project1}
            type={"Landing page"}
          />
          <ProjectCard
            projectLink="https://quantumvflux.github.io/react-weather-app/"
            title={"Weather App"}
            img={project2}
            type={"Web App"}
          />
          <ProjectCard
            projectLink="https://quantumvflux.github.io/portfolio"
            title={"Marcos's old portfolio"}
            img={project3}
            type={"My old portfolio!"}
          />
        </Stack>
      </Box>
    </Box>
  );
};

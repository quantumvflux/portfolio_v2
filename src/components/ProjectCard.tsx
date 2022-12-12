import { Box, Image, Text, Card, CardHeader, Link } from "@chakra-ui/react";

export const ProjectCard: React.FC<Project> = ({
  title,
  projectLink,
  img,
  type,
}) => {
  return (
    <Card>
      <Box
        backgroundColor={"blackAlpha.600"}
        height={72}
        width={64}
        margin={"auto"}
        borderRadius={"xl"}
      >
        <Link
          href={projectLink}
          target={"_blank"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"start"}
          gap={8}
          color={"white"}
        >
          <Image
            borderTopRadius={"xl"}
            src={img}
            objectFit={"cover"}
            height={"40"}
            width={"100%"}
          />
          <Box marginLeft={8}>
            <Text marginBottom={2}>{title}</Text>
            <Text fontSize={"sm"}>{type}</Text>
          </Box>
        </Link>
      </Box>
    </Card>
  );
};

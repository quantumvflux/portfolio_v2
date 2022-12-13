import {
  Text,
  Image,
  Popover,
  PopoverBody,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

export const Skills: React.FC<Skill> = ({
  imgUrl,
  skillName,
  skillDescription,
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Image
          as={motion.img}
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 1.02 }}
          boxSize={"48"}
          objectFit={"contain"}
          src={imgUrl}
          margin={0}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent backgroundColor={"purple.200"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <Text textAlign={"center"} fontWeight={"bold"}>
              {skillName}
            </Text>
          </PopoverHeader>
          <PopoverBody>{skillDescription}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

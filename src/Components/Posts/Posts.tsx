import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Image,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";

type PostProps = {
  id: number;
  postUrl: string;
  userImg: string;
};

const Posts: React.FC<PostProps> = ({ postUrl, userImg }) => {
  const [liked, setLiked] = useState<Boolean>(false);
  function handleClick() {
    setLiked(!liked);
  }
  return (
    <Card w="275px" h="300px" variant="filled" rounded="lg">
      <Box overflow="hidden" roundedTop="lg" height="400px">
        <Image
          cursor="pointer"
          objectFit="cover"
          // src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          src={postUrl}
          alt="Chakra UI"
          height="250px"
          width="275px"
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.8s ease-in-out",
          }}
        />
      </Box>
      <CardHeader height="100px" background="background" roundedBottom="lg">
        <Avatar
          border={1}
          borderColor="pink.500"
          position="relative"
          top="-45px"
          left="-15px"
          name="Segun Adebayo"
          src={userImg}
        />
        <Icon
          m={2}
          as={BsFillHeartFill}
          onClick={handleClick}
          fontSize="2xl"
          color={`${liked ? "red.600" : "gray.200"}`}
          zIndex={2}
          cursor="pointer"
          position="relative"
          top="-20px"
          right="-155px"
        />
        <Stack width="100%" mb={0}>
          <Text
            position="relative"
            top="-70px"
            left="38px"
            fontSize="sm"
            color="gray.200"
          >
            User Name
          </Text>
          <Text position="relative" top="-70px" fontSize="lg" color="gray.200">
            Title of the Post{" "}
          </Text>
        </Stack>
      </CardHeader>
    </Card>
  );
};

export default Posts;

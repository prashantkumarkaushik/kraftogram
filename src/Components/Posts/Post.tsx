import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Heading,
  Box,
  Text,
  IconButton,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import React from "react";

type PostProps = {
  id: number;
  postUrl: string;
  userImg: string;
};

const Post: React.FC<PostProps> = ({ postUrl, userImg }) => {
  return (
    <Card w="260px" h="250px" variant="filled" rounded="lg">
      <Box overflow="hidden" roundedTop="lg" height="400px">
        <Image
          cursor="pointer"
          objectFit="cover"
          // src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          src={postUrl}
          alt="Chakra UI"
          height="170px"
          width="260px"
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.8s ease-in-out",
          }}
        />
      </Box>
      <CardHeader height="100px" background="background" roundedBottom='lg'>
        <Avatar
          border={1}
          borderColor="pink.500"
          position="relative"
          top="-45px"
          left="-15px"
          name="Segun Adebayo"
          src={userImg}
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

export default Post;

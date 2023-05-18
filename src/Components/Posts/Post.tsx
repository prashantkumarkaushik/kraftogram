import { Box, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const obj = {
    postUrl: location.state.postUrl,
    userImg: location.state.userImg,
  };
  return (
    <>
      <Box ml="80px" pt="73px">
        <Box>
          <Image
            width="100%"
            src={obj.postUrl}
            height="75vh"
            marginBottom="2px"
          />
          <Flex
            justifyContent="center"
            borderY="2px"
            px={2}
            py={1}
            alignItems="center"
            width="90%"
            margin="auto"
            gap={20}
          >
            <Text fontSize="xl" fontWeight="600">
              Title of the post
            </Text>
            <Image
              border="2px"
              borderColor="gray.700"
              width="60px"
              src={obj.userImg}
              height="60px"
              rounded="full"
            />
            <Flex justifyContent="content" alignItems="center" gap={2}>
              <Icon as={BsFillHeartFill} color="gray.400" />
              <Text>24</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
export default Post;

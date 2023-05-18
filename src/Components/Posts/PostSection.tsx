import { Box, Flex, Text } from "@chakra-ui/react";
import HeroSection from "../HeroSection";
import Posts from "./Posts";
const PostSection = () => {
  const postData = [
    {
      id: 1,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.photocdn.pt%2Fimages%2Farticles%2F2017%2F04%2F28%2FiStock-545347988.jpg&f=1&nofb=1&ipt=57ced07a8d3608fc9145913f9c50ba7214d038c724c41d23c5a3739fd2776901&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb6028921327fcbd8db909d8449d0&ipo=images",
    },
    {
      id: 2,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLandscape-wallpaper-7.jpg&f=1&nofb=1&ipt=cedc9f1482a859dc4a1b06d297b2b09b27a31d930c2f2b6ed43bec684d0c6fcb&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrcureton.com%2Fwp-content%2Fuploads%2F2019%2F08%2FDepositphotos_32909213_l-2015.jpg&f=1&nofb=1&ipt=b4f3b4e4746c8d9daba148bd01ba25f279f0af85c60003500ac67c2668e1a5b0&ipo=images",
    },
    {
      id: 3,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.photocdn.pt%2Fimages%2Farticles%2F2017%2F04%2F28%2FiStock-545347988.jpg&f=1&nofb=1&ipt=57ced07a8d3608fc9145913f9c50ba7214d038c724c41d23c5a3739fd2776901&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb6028921327fcbd8db909d8449d0&ipo=images",
    },
    {
      id: 4,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLandscape-wallpaper-7.jpg&f=1&nofb=1&ipt=cedc9f1482a859dc4a1b06d297b2b09b27a31d930c2f2b6ed43bec684d0c6fcb&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrcureton.com%2Fwp-content%2Fuploads%2F2019%2F08%2FDepositphotos_32909213_l-2015.jpg&f=1&nofb=1&ipt=b4f3b4e4746c8d9daba148bd01ba25f279f0af85c60003500ac67c2668e1a5b0&ipo=images",
    },
    {
      id: 5,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.photocdn.pt%2Fimages%2Farticles%2F2017%2F04%2F28%2FiStock-545347988.jpg&f=1&nofb=1&ipt=57ced07a8d3608fc9145913f9c50ba7214d038c724c41d23c5a3739fd2776901&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb6028921327fcbd8db909d8449d0&ipo=images",
    },
    {
      id: 6,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLandscape-wallpaper-7.jpg&f=1&nofb=1&ipt=cedc9f1482a859dc4a1b06d297b2b09b27a31d930c2f2b6ed43bec684d0c6fcb&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrcureton.com%2Fwp-content%2Fuploads%2F2019%2F08%2FDepositphotos_32909213_l-2015.jpg&f=1&nofb=1&ipt=b4f3b4e4746c8d9daba148bd01ba25f279f0af85c60003500ac67c2668e1a5b0&ipo=images",
    },
    {
      id: 7,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.photocdn.pt%2Fimages%2Farticles%2F2017%2F04%2F28%2FiStock-545347988.jpg&f=1&nofb=1&ipt=57ced07a8d3608fc9145913f9c50ba7214d038c724c41d23c5a3739fd2776901&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb6028921327fcbd8db909d8449d0&ipo=images",
    },
    {
      id: 8,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLandscape-wallpaper-7.jpg&f=1&nofb=1&ipt=cedc9f1482a859dc4a1b06d297b2b09b27a31d930c2f2b6ed43bec684d0c6fcb&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrcureton.com%2Fwp-content%2Fuploads%2F2019%2F08%2FDepositphotos_32909213_l-2015.jpg&f=1&nofb=1&ipt=b4f3b4e4746c8d9daba148bd01ba25f279f0af85c60003500ac67c2668e1a5b0&ipo=images",
    },
    {
      id: 9,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.photocdn.pt%2Fimages%2Farticles%2F2017%2F04%2F28%2FiStock-545347988.jpg&f=1&nofb=1&ipt=57ced07a8d3608fc9145913f9c50ba7214d038c724c41d23c5a3739fd2776901&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb6028921327fcbd8db909d8449d0&ipo=images",
    },
    {
      id: 10,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLandscape-wallpaper-7.jpg&f=1&nofb=1&ipt=cedc9f1482a859dc4a1b06d297b2b09b27a31d930c2f2b6ed43bec684d0c6fcb&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrcureton.com%2Fwp-content%2Fuploads%2F2019%2F08%2FDepositphotos_32909213_l-2015.jpg&f=1&nofb=1&ipt=b4f3b4e4746c8d9daba148bd01ba25f279f0af85c60003500ac67c2668e1a5b0&ipo=images",
    },
    {
      id: 11,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.photocdn.pt%2Fimages%2Farticles%2F2017%2F04%2F28%2FiStock-545347988.jpg&f=1&nofb=1&ipt=57ced07a8d3608fc9145913f9c50ba7214d038c724c41d23c5a3739fd2776901&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb6028921327fcbd8db909d8449d0&ipo=images",
    },
    {
      id: 12,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLandscape-wallpaper-7.jpg&f=1&nofb=1&ipt=cedc9f1482a859dc4a1b06d297b2b09b27a31d930c2f2b6ed43bec684d0c6fcb&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrcureton.com%2Fwp-content%2Fuploads%2F2019%2F08%2FDepositphotos_32909213_l-2015.jpg&f=1&nofb=1&ipt=b4f3b4e4746c8d9daba148bd01ba25f279f0af85c60003500ac67c2668e1a5b0&ipo=images",
    },
    {
      id: 13,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.photocdn.pt%2Fimages%2Farticles%2F2017%2F04%2F28%2FiStock-545347988.jpg&f=1&nofb=1&ipt=57ced07a8d3608fc9145913f9c50ba7214d038c724c41d23c5a3739fd2776901&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb6028921327fcbd8db909d8449d0&ipo=images",
    },
    {
      id: 14,
      postUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLandscape-wallpaper-7.jpg&f=1&nofb=1&ipt=cedc9f1482a859dc4a1b06d297b2b09b27a31d930c2f2b6ed43bec684d0c6fcb&ipo=images",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrcureton.com%2Fwp-content%2Fuploads%2F2019%2F08%2FDepositphotos_32909213_l-2015.jpg&f=1&nofb=1&ipt=b4f3b4e4746c8d9daba148bd01ba25f279f0af85c60003500ac67c2668e1a5b0&ipo=images",
    },
  ];

  return (
    <>
      <HeroSection />
      <Box mx="65px" mt="75px">
        <Text
          m={4}
          fontWeight={700}
          borderY="4px"
          width="95px"
          color="gray.900"
          fontSize="3xl"
        >
          Posts
        </Text>
        <Flex mx="30px" wrap="wrap" gap={4} justify="center">
          {postData.map((post) => (
            <Posts
              key={post.id}
              id={post.id}
              postUrl={post.postUrl}
              userImg={post.userImg}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default PostSection;

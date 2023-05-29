import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import {BiMessageSquareAdd} from 'react-icons/bi'
import HeroSection from "../HeroSection";
import Posts from "./Posts";
const PostSection = () => {
  const postData = [
    {
      id: 1,
      postTitle: "Cutie Pot",
      postLikes: 23,
      userName: "Saurabh",
      postUrl: "https://m.media-amazon.com/images/I/81VySUVX+sL.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb6028921327fcbd8db909d8449d0&ipo=images",
    },
    {
      id: 22,
      postTitle: "Snowy Owl",
      postLikes: 28,
      userName: "Rishabh",
      postUrl:
        "https://www.123homeschool4me.com/wp-content/uploads/2021/01/snowy-baby-owl-1.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 23,
      postTitle: "Paper Flowers",
      postLikes: 20,
      userName: "Prashant",
      postUrl: "https://i.ytimg.com/vi/Pa13wNp8uKA/maxresdefault.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 24,
      postTitle: "Sea Shell",
      postLikes: 25,
      userName: "Viresh",
      postUrl:
        "https://alphamom.com/wp-content/uploads/2010/07/4817347412_25ee6bfd1f.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 8,
      postTitle: "Cutie Pot",
      postLikes: 22,
      userName: "Shreya",
      postUrl:
        "https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 9,
      postTitle: "Cutie Pot",
      postLikes: 50,
      userName: "Rishabh",
      postUrl:
        "https://i.pinimg.com/236x/fe/55/58/fe555841495b697456ab4b0d2bdf106e.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 10,
      postTitle: "Cutie Pot",
      postLikes: 32,
      userName: "Prashant",
      postUrl:
        "https://pcprd.azureedge.net/content/bring-the-outdoors-inside-with-these-5-nature-inspired-diy-craft-ideas-for-kids-4815836458368.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 11,
      postTitle: "Cutie Pot",
      postLikes: 23,
      userName: "Bharat",
      postUrl:
        "https://images.news18.com/ibnlive/uploads/2021/04/1618806057_shutterstock_1679527528.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 12,
      postTitle: "Cutie Pot",
      postLikes: 23,
      userName: "Saurabh",
      postUrl:
        "https://hips.hearstapps.com/hmg-prod/images/fall-crafts-for-kids-1657142945.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 13,
      postTitle: "Cutie Pot",
      postLikes: 27,
      userName: "Abhay",
      postUrl:
        "https://artfulparent.com/wp-content/uploads/2022/12/valentine-crafts-for-kids_feature.png",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 14,
      postTitle: "Cutie Pot",
      postLikes: 23,
      userName: "Abhishek",
      postUrl:
        "https://happyhooligans.ca/wp-content/uploads/2020/10/Cardboard-Pumpkin-String-Art-craft-for-kids-600x900.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 15,
      postTitle: "Cutie Pot",
      postLikes: 17,
      userName: "Ishika",
      postUrl:
        "https://cdn.cdnparenting.com/articles/2021/04/27132204/ab3b3efd3bf085fde9096adb85c7338f-e1619510027532.jpeg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 16,
      postTitle: "Cutie Pot",
      postLikes: 23,
      userName: "Sakshi",
      postUrl:
        "https://www.123homeschool4me.com/wp-content/uploads/2021/01/snowy-baby-owl-1.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 17,
      postTitle: "Cutie Pot",
      postLikes: 23,
      userName: "Amit",
      postUrl:
        "https://www.kidpid.com/wp-content/uploads/2020/10/butterfly-matchstick-art-ideas.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 18,
      postTitle: "Cutie Pot",
      postLikes: 29,
      userName: "Rishabh",
      postUrl:
        "https://hips.hearstapps.com/hmg-prod/images/willowday-leaf-crafts-leaf-art-for-kids-1593520411.png?resize=480:*",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 19,
      postTitle: "Cutie Pot",
      postLikes: 37,
      userName: "Bharat",
      postUrl:
        "https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 20,
      postTitle: "Rabbit DIY",
      postLikes: 23,
      userName: "Saurabh",
      postUrl:
        "https://www.redtedart.com/wp-content/uploads/2012/01/chinese-new-year-dragon-craft.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 21,
      postTitle: "Fish Craft",
      postLikes: 29,
      userName: "Sanjay",
      postUrl:
        "https://images.immediate.co.uk/production/volatile/sites/32/2021/03/rainbow-fish-weaving-craft-kits-for-kids--44df36c-1.jpeg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 22,
      postTitle: "Snowy Owl",
      postLikes: 28,
      userName: "Rishabh",
      postUrl:
        "https://www.123homeschool4me.com/wp-content/uploads/2021/01/snowy-baby-owl-1.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 23,
      postTitle: "Paper Flowers",
      postLikes: 20,
      userName: "Prashant",
      postUrl: "https://i.ytimg.com/vi/Pa13wNp8uKA/maxresdefault.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
    {
      id: 24,
      postTitle: "Sea Shell",
      postLikes: 25,
      userName: "Viresh",
      postUrl:
        "https://alphamom.com/wp-content/uploads/2010/07/4817347412_25ee6bfd1f.jpg",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2Fb3%2Fdd%2Fwomen_model_brunette_long_hair_open_mouth_blue_eyes_simple_background_looking_at_viewer-16946.jpg!d&f=1&nofb=1&ipt=77b4ce8a41cbea7efe8e408b97139b28005cb602892132",
    },
  ];

  return (
    <>
      <HeroSection />
      <Box mx="65px" mt="75px">
        <Flex justify='space-between' align='center' mr='40px'>
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
        <Icon fontSize='5xl' as={BiMessageSquareAdd} />
        </Flex>
        <Flex mx="30px" wrap="wrap" gap={4} justify="center">
          {postData.map((post) => (
            <Posts
              key={post.id}
              id={post.id}
              postTitle={post.postTitle}
              userName={post.userName}
              postUrl={post.postUrl}
              userImg={post.userImg}
              postLikes={post.postLikes}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default PostSection;

import { Box } from "@chakra-ui/react";
import { UserButton, UserProfile } from "@clerk/clerk-react";

const User = () => {
  return (
    <Box pt="75px" pl="75px">
      {/* <UserProfile /> */}
      <UserButton />
    </Box>
  );
};

export default User;

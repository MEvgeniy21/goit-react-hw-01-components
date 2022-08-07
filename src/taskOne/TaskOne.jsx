import { Profile } from 'taskOne/components/Profile';
import user from 'taskOne/user.json';
import { Box } from 'common/Box';

export function TaskOne() {
  return (
    <Box width="100%" pt={5} pb={5} bg="bgOne">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Box>
  );
}

import { FriendList } from 'taskThree/components/FriendList';
import friends from 'taskThree/friends.json';
import { Box } from 'common/Box';

export function TaskThree() {
  return (
    <Box width="100%" pt={5} pb={5} bg="white" borderColor="black" borderBottom="normal">
      <FriendList friends={friends} />
    </Box>
  );
}

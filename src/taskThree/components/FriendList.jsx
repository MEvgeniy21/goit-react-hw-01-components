import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem avatar={avatar} isOnline={isOnline} name={name} key={id} />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

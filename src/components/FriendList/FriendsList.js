import { FriendList } from './FriendsList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friends={friend} />
      ))}
    </FriendList>
  );
};

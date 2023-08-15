import { FriendList } from './FriendsList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      <FriendListItem friends={friends} />
    </FriendList>
  );
};

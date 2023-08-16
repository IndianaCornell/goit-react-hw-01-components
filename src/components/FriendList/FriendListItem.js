import { AiFillHeart } from 'react-icons/ai';
import { ListItem, UserName } from './FriendsList.styled';

export const FriendListItem = ({ friends: { isOnline, avatar, name } }) => {
  return (
    <ListItem>
      <AiFillHeart fill={isOnline ? 'green' : 'red'} size={50}>
        {isOnline}
      </AiFillHeart>
      <img src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </ListItem>
  );
};

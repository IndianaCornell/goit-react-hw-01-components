import { ListItem, UserName, Status, FriendList } from './FriendsList.styled';
import { AiFillHeart } from 'react-icons/ai';

export const FriendsList = ({ friends }) => {
  const friend = friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <ListItem key={id}>
        <AiFillHeart fill={isOnline ? 'green' : 'red'} size={50}>
          {isOnline}
        </AiFillHeart>
        <img src={avatar} alt="User avatar" width="48" />
        <UserName>{name}</UserName>
      </ListItem>
    );
  });

  return <FriendList>{friend}</FriendList>;
};

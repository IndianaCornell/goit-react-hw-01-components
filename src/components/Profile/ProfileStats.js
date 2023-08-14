import { List, Item } from './ProfileStats.styled';

export const ProfileStats = ({ userStats: { followers, views, likes } }) => {
  return (
    <List>
      <Item>
        <span>Followers</span>
        <span>{followers}</span>
      </Item>
      <Item>
        <span>Views</span>
        <span>{views}</span>
      </Item>
      <Item>
        <span>Likes</span>
        <span>{likes}</span>
      </Item>
    </List>
  );
};

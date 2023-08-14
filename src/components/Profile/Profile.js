import { ProfileUser } from './ProfileUser';
import { ProfileStats } from './ProfileStats';
import { ProfileCard } from './Profile.styled';

export const Profile = props => {
  return (
    <ProfileCard>
      <ProfileUser userDesc={props.user} />
      <ProfileStats userStats={props.user.stats} />
    </ProfileCard>
  );
};

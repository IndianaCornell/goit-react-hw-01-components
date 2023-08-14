import { ProfileHero, Image } from './ProfileUser.styled';

export const ProfileUser = ({
  userDesc: { avatar, username, tag, location },
}) => {
  return (
    <ProfileHero>
      <Image src={avatar} />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </ProfileHero>
  );
};

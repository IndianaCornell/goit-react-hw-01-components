import { Desc, DescContainer } from './StatDesc.styled';

export const StatDesc = ({ item: { label, percentage } }) => {
  return (
    <DescContainer>
      <Desc>{label}</Desc>
      <Desc>{percentage}</Desc>
    </DescContainer>
  );
};

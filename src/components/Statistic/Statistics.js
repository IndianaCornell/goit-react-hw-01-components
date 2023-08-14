import { StatDesc } from './StatDesc';
import { Title, StatConteiner, List } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  const statItem = stats.map(item => {
    return (
      <li key={item.id}>
        <StatDesc item={item} />
      </li>
    );
  });

  return (
    <StatConteiner>
      <Title> Upload stats</Title>
      <List>{statItem}</List>
    </StatConteiner>
  );
};

import { StatDesc } from './StatDesc';
import { Title, StatConteiner, List } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  const statItem = stats.map(item => {
    return (
      <li key={item.id}>
        <StatDesc item={item} />
      </li>
    );
  });

  return (
    <StatConteiner>
      {title && <Title>{title}</Title>}
      <List>{statItem}</List>
    </StatConteiner>
  );
};

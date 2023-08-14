import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistic/Statistics';
import data from '../data.json';
import { FriendsList } from './FriendList/FriendsList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};

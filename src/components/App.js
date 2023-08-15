import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistic/Statistics';
import data from '../data/data.json';
import { FriendsList } from './FriendList/FriendsList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};

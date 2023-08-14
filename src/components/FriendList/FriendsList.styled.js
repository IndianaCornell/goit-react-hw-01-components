import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 20px;
  width: 300px;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(238, 238, 238);
  -webkit-box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75);

  border: 1px solid rgb(34, 40, 49);
`;

export const UserName = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  color: rgb(57, 62, 70);
`;

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

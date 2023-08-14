import styled from 'styled-components';

export const StatConteiner = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 20px;
  background-color: rgb(238, 238, 238);
  -webkit-box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  color: rgb(57, 62, 70);
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

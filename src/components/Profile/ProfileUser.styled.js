import styled from 'styled-components';

export const ProfileHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  color: rgb(57, 62, 70);
`;

export const Image = styled.img`
  max-width: 200px;
  border-radius: 100px;
  object-fit: cover;
`;

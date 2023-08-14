import { TitlesList, TitleItem } from './TableTitles.styled';

export const TableTitles = () => {
  return (
    <thead>
      <TitlesList>
        <TitleItem>Type</TitleItem>
        <TitleItem>Amount</TitleItem>
        <TitleItem>Currency</TitleItem>
      </TitlesList>
    </thead>
  );
};

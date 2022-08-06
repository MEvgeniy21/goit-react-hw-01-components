import styled from '@emotion/styled';

export const RowBody = styled.tr`
  background-color: ${p => (p.index % 2 === 0 ? p.theme.colors.white : p.theme.colors.bgFour)};
  color: ${p => p.theme.colors.textFour};
  font-size: ${p => p.theme.fontSizes.s};

  & td {
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderFour};
  }

  & td:first-of-type {
    text-align: left;
    padding-left: ${p => p.theme.space[6]}px;
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderFour};
  }
`;

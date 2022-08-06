import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.space[2]}px;
  border-spacing: 0;
  overflow: hidden;
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
`;

export const RowHead = styled.tr`
  font-size: ${p => p.theme.fontSizes.s};
  background-color: ${p => p.theme.colors.bgTHead};
  color: ${p => p.theme.colors.white};

  & th {
    width: 200px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
  }

  & th:first-of-type {
    text-align: left;
    padding-left: ${p => p.theme.space[6]}px;
  }

  & th:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  }
`;

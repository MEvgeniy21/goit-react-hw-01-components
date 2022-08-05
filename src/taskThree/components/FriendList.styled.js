import styled from '@emotion/styled';

export const List = styled.ul`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.black};
`;

import styled from '@emotion/styled';

export const StatContainer = styled.section`
  display: block;
  width: ${p => p.countItem * 100}px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.body};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.space[2]}px;
  overflow: hidden;
`;

export const StatTitle = styled.h2`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.textTwo};
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
`;

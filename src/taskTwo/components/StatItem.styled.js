import styled from '@emotion/styled';
import { getRandomHexColor } from 'utilities';

export const Item = styled.li`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${getRandomHexColor};
  color: ${p => p.theme.colors.white};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Percentage = styled.span`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.xm};
`;

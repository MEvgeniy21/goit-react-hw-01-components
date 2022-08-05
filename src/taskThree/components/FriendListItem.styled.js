import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  column-gap: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.space[1]}px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 3px 6px -2px rgba(34, 60, 80, 0.7);

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.red};
`;

export const Avatar = styled.img`
  width: 64px;
  border-radius: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.bgOne};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.xm};
`;

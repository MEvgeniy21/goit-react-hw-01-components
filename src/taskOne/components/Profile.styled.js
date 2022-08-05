import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.body};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.space[2]}px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Description = styled.div`
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.bgOne};
`;

export const Name = styled.p`
  margin-top: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
`;

export const PostName = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.textOne};
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  font-size: ${p => p.theme.fontSizes.xm};
  background-color: ${p => p.theme.colors.bgStats};

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    flex-direction: column;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
    border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.textOne};
  }

  & li:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.textOne};
  }
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.textOne};
`;

export const Quantity = styled.span`
  margin-top: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

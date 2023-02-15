import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ typeName }) => {
    return typeName ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const FriendName = styled.p`
  font-weight: 900;
`;
import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 350px;
  margin: 50px auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 20px 10px rgba(85, 63, 24, 0.75);
  border-radius: 5px;
`;

export const UserThumb = styled.div`
  width: 250px;
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
  border-radius: 50%;
  
`;

export const UserName = styled.p`
  font-weight: 900;
  text-align: center;
`;

export const UserTag = styled.p`
  text-align: center;
`;

export const UserLocation = styled.p`
  text-align: center;
`;
export const Stat = styled.li`
 background-color: #553f18;
 color: white;
 padding: 5px;
`;
export const UserStats = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  & li {
    border: 1px solid #553f18;
    width: 100%;
    border-radius: 10px;
  }
`;

export const StatsLabel = styled.span`
  display: block;
  text-align: center;
`;

export const StatsQuantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
`;
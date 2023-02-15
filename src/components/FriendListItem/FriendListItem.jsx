import PropTypes from 'prop-types';

import {
  Friend,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export function FriendListItem({ friend: { avatar, name, isOnline, id } }) {
  return (
    <Friend key={id}>
      <FriendStatus typeName={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar class="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

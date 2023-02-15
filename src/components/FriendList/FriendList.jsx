import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendListItem friend={friend} />
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

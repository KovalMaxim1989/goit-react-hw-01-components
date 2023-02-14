import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export function FriendList ({ friends }) { 
    return (
         <ul class="friend-list">
          {friends.map(friend => <FriendListItem friend={friend} />)}
        </ul>
    );
};

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
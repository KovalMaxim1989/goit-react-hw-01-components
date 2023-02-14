import PropTypes from "prop-types";

export function FriendListItem({ friend: { avatar, name, isOnline, id } }) {
    return (
        <li class="item" key={id}>
            <span class="status" tupeName={isOnline}>{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    );
};
 
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
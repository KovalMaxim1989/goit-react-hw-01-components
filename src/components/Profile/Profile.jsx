import PropTypes from "prop-types";
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiUsers} from 'react-icons/hi';
import { FaEye } from 'react-icons/fa';
import { AiFillLike} from 'react-icons/ai';

export function Profile({ username,
    tag,
    location,
    avatar,
    followers,
    views,
    likes, }) { 
    return (
<div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location"><MdOutlineLocationOn/>{location}</p>
  </div>
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}<HiUsers/></span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}<FaEye/></span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}<AiFillLike/></span>
    </li>
  </ul>
</div>);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

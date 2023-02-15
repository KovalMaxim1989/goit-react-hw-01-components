import PropTypes from "prop-types";
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiUsers} from 'react-icons/hi';
import { FaEye } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';

import {
  UserProfile,
  UserThumb,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsLabel,
  StatsQuantity,
  Stat,
} from './Profile.styled';

export function Profile({ username,
    tag,
    location,
    avatar,
    followers,
    views,
    likes, }) { 
    return (
<UserProfile>
  <UserThumb>
    <UserAvatar src={avatar} alt="User avatar" />
    <UserName class="name">{username}</UserName>
    <UserTag class="tag">{tag}</UserTag>
    <UserLocation class="location"><MdOutlineLocationOn/>{location}</UserLocation>
  </UserThumb>
  <UserStats class="stats">
    <Stat>
      <StatsLabel class="label">Followers</StatsLabel>
      <StatsQuantity class="quantity">{followers}<HiUsers/></StatsQuantity>
    </Stat>
    <Stat>
      <StatsLabel class="label">Views</StatsLabel>
      <StatsQuantity class="quantity">{views}<FaEye/></StatsQuantity>
    </Stat>
    <Stat>
      <StatsLabel class="label">Likes</StatsLabel>
      <StatsQuantity class="quantity">{likes}<AiFillLike/></StatsQuantity>
    </Stat>
  </UserStats>
</UserProfile>);
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

import Container from 'components/Container/Container';
import {
  StyledProfileCard,
  StyledProfileCardContent,
  StyledProfileCardStatistic,
  StyledProfileCardStatisticItem,
} from './Profile.styled';
import UserAvatar from 'components/UserAvatar/UserAvatar';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <StyledProfileCard>
        <StyledProfileCardContent>
          <UserAvatar url={avatar} name={username} />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </StyledProfileCardContent>

        <StyledProfileCardStatistic>
          <StyledProfileCardStatisticItem>
            <span className="label">Followers</span>
            <span className="quantity">
              {Number(stats.followers).toLocaleString()}
            </span>
          </StyledProfileCardStatisticItem>
          <StyledProfileCardStatisticItem>
            <span className="label">Views</span>
            <span className="quantity">
              {Number(stats.views).toLocaleString()}
            </span>
          </StyledProfileCardStatisticItem>
          <StyledProfileCardStatisticItem>
            <span className="label">Likes</span>
            <span className="quantity">
              {Number(stats.likes).toLocaleString()}
            </span>
          </StyledProfileCardStatisticItem>
        </StyledProfileCardStatistic>
      </StyledProfileCard>
    </Container>
  );
};

export default Profile;

import { StyledFriendsListItem } from './FriendsListItem.styled';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriendsListItem $isOnline={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriendsListItem>
  );
};

export default FriendsListItem;

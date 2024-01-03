import Container from 'components/Container/Container';
import FriendsListItem from 'components/FriendsListItem/FriendsListItem';
import { StyledFriendList } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Container>
      <StyledFriendList>
        {friends.map(friend => (
          <FriendsListItem key={friend.id} {...friend} />
        ))}
      </StyledFriendList>
    </Container>
  );
};

export default FriendList;

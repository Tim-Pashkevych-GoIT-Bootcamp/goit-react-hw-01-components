import { StyledUserAvatar } from './UserAvatar.styled';

const UserAvatar = ({ url, name }) => {
  return (
    <StyledUserAvatar>
      <img src={url} alt={`${name} avatar`} width="512" />
    </StyledUserAvatar>
  );
};

export default UserAvatar;

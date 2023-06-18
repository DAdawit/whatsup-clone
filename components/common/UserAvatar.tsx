import { Avatar } from "@mui/material";
interface Props {
  image: string;
  alt: string;
}

const UserAvatar: React.FC<Props> = ({ image, alt }) => {
  return (
    <>
      <Avatar alt={`${alt}`} src={`${image}`} />
    </>
  );
};

export default UserAvatar;

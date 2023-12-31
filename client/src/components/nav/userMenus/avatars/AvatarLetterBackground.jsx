import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../../slices/userSlice";

const stringToColor = (string) => {
  let hash = 0;
  let i;
  let color = "#";

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

const stringAvatar = (name) => {
  return {
    sx: {bgcolor: stringToColor(name)},
    children: `${name.split(" ")[0][0]}`,
  };
};

const AvatarLetterBackground = () => {
  const currentUser = useSelector(selectCurrentUser);
  return <Avatar {...stringAvatar(`${currentUser.username}`)} />;
};

export default AvatarLetterBackground;

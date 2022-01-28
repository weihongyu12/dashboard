import React, { useContext, FC } from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  CardProps,
} from '@mui/material';
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from '@mui/material/colors';
import { SessionContext } from 'components';

const avatarColorPalettes = [
  red[600],
  pink[600],
  purple[600],
  deepPurple[600],
  indigo[600],
  blue[600],
  lightBlue[600],
  cyan[600],
  teal[600],
  green[600],
  lightGreen[600],
  lime[600],
  yellow[600],
  amber[600],
  orange[600],
  deepOrange[600],
  brown[600],
  grey[600],
  blueGrey[600],
];

const avatarColor = (string: string) => {
  const index = string.charCodeAt(0) % 18;
  return avatarColorPalettes[index];
};

const ProfileDetails: FC<CardProps> = function ProfileDetails({ sx = {} }) {
  const { session } = useContext(SessionContext);
  const { user } = session;

  return (
    <Card
      sx={{
        ...sx,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        {
          user?.avatar ? (
            <Avatar
              src={user.avatar}
              sx={{
                height: 100,
                width: 100,
              }}
            />
          ) : (
            <Avatar
              alt="Supplier"
              sx={{
                height: 100,
                width: 100,
              }}
              style={user?.username ? { backgroundColor: avatarColor(user.username) } : {}}
            >
              {user?.username}
            </Avatar>
          )
        }
        <Typography
          gutterBottom
          variant="h3"
          sx={{
            mt: 1,
          }}
        >
          {user?.username}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;

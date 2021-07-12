import React, { FC } from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Theme,
} from '@material-ui/core';
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
} from '@material-ui/core/colors';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { useAppSelector } from 'store';

export interface ProfileDetailsProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlgin: 'center',
  },
  name: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    height: 100,
    width: 100,
  },
  removeBotton: {
    width: '100%',
  },
}));

const ProfileDetails: FC<ProfileDetailsProps> = ({ className = '' }) => {
  const classes = useStyles();

  const { user } = useAppSelector((state) => state.session);

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

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        {
          user?.avatar ? (
            <Avatar
              className={classes.avatar}
              src={user.avatar}
            />
          ) : (
            <Avatar
              alt="Supplier"
              className={classes.avatar}
              style={user?.username ? { backgroundColor: avatarColor(user.username) } : {}}
            >
              {user?.username}
            </Avatar>
          )
        }
        <Typography
          className={classes.name}
          gutterBottom
          variant="h3"
        >
          {user?.username}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;

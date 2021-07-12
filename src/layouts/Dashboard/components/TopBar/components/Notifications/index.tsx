import React, {
  useRef,
  useEffect,
  useState,
  FC,
  MouseEventHandler,
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  ClickAwayListener,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Popper,
  Typography,
  Theme,
} from '@material-ui/core';
import { NotificationsNoneOutlined as NotificationsNoneOutlinedIcon } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/styles';
import { format, parseISO } from 'date-fns';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { messageService } from 'service';
import envelope from 'assets/images/undraw_envelope_n8lc.svg';
import { Message } from 'types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  popper: {
    zIndex: 3,
  },
  card: {
    width: 350,
    maxWidth: '100%',
  },
  content: {
    padding: 0,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  empty: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  image: {
    height: 240,
    backgroundImage: `url(${envelope})`,
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const Notifications: FC = () => {
  const classes = useStyles();

  const [list, setList] = useState<Message[]>([]);
  const [count, setCount] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<any | null>(null);
  const notificationsRef = useRef(null);

  const open = Boolean(anchorEl);

  const handleOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchData = async () => {
    const response = await messageService.index({
      page: 1,
      perPage: 5,
    });
    setList([...response.data]);
    setCount(response.meta.total);
  };

  const fetchReaded = (messageId: string) => {
    messageService.update(messageId, {
      isRead: 1,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <IconButton
        ref={notificationsRef}
        color="inherit"
        onClick={handleOpen}
      >
        <Badge badgeContent={count} max={99} color="secondary">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorEl}
        className={classes.popper}
      >
        <ClickAwayListener
          onClickAway={handleClose}
        >
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              {
                list.length === 0 ? (
                  <div className={classes.empty}>
                    <div className={classes.image} />
                    <Typography variant="h4">您没有任何未读消息</Typography>
                  </div>
                ) : (
                  <List dense>
                    {
                      list.map((item) => (
                        <ListItem
                          component={RouterLink}
                          to={item.url}
                          button
                          divider
                          key={item.id}
                          onClick={() => {
                            fetchReaded(item.id);
                          }}
                        >
                          <ListItemText
                            primary={item.title}
                            secondary={(
                              <>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textPrimary"
                                >
                                  {format(parseISO(item.date), 'PPP', { locale: zhHansLocale })}
                                </Typography>
                                {' '}
                                -
                                {' '}
                                {item.content}
                              </>
                            )}
                          />
                        </ListItem>
                      ))
                    }
                  </List>
                )
              }
            </CardContent>
            {
              list.length > 0 && (
                <CardActions className={classes.actions}>
                  <Button
                    component={RouterLink}
                    to="/account/notice"
                    color="primary"
                    onClick={handleClose}
                  >
                    查看全部
                  </Button>
                </CardActions>
              )
            }
          </Card>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default Notifications;

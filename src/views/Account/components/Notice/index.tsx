import React, {
  useEffect,
  useState,
  FC,
  ChangeEvent,
} from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Theme,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import {
  Mail as MailIcon,
  Drafts as DraftsIcon,
} from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { messageService } from 'service';
import { ReactComponent as MailboxSvg } from 'assets/images/undraw_Mailbox_re_dvds.svg';
import { Message } from 'types';

export interface NoticeProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  content: {
    padding: 0,
  },
  blank: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3),
  },
  mailboxSvg: {
    width: 163,
    height: 140,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItem: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));

const Notice: FC<NoticeProps> = ({ className = '' }) => {
  const classes = useStyles();

  const [list, setList] = useState<Message[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const fetchData = async (currentPage: number) => {
    const response = await messageService.index({
      page: currentPage,
      perPage: 20,
    });
    setList([...response.data]);
    setTotal(response.meta.pages);
  };

  const fetchReaded = (messageId: string) => {
    messageService.update(messageId, {
      isRead: 1,
    });
  };

  const handleChange = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        {
          list.length === 0 ? (
            <div className={classes.blank}>
              <MailboxSvg className={classes.mailboxSvg} />
              <Typography variant="h4" align="center">
                您没有收到任何消息
              </Typography>
            </div>
          ) : (
            <>
              <List>
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
                      <ListItemIcon>
                        {
                          item.isRead === 1 ? (
                            <DraftsIcon />
                          ) : (
                            <MailIcon />
                          )
                        }
                      </ListItemIcon>
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
              <div className={classes.pagination}>
                <Pagination
                  page={page}
                  count={total}
                  color="primary"
                  onChange={handleChange}
                />
              </div>
            </>
          )
        }
      </CardContent>
    </Card>
  );
};

Notice.propTypes = {
  className: PropTypes.string,
};

Notice.defaultProps = {
  className: '',
};

export default Notice;

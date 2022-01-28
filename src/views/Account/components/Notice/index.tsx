import React, {
  useEffect,
  useState,
  FC,
  ChangeEvent,
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Pagination,
  Typography,
  useTheme,
  CardProps,
} from '@mui/material';
import {
  Mail as MailIcon,
  Drafts as DraftsIcon,
} from '@mui/icons-material';
import { format, parseISO } from 'date-fns';
import zhHansLocale from 'date-fns/locale/zh-CN';
import { messageService } from 'service';
import { ReactComponent as MailboxSvg } from 'assets/images/undraw_Mailbox_re_dvds.svg';
import { Message } from 'types';

const Notice: FC<CardProps> = function Notice({ sx = {} }) {
  const [list, setList] = useState<Message[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const theme = useTheme();

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
    <Card
      sx={{
        ...sx,
      }}
    >
      <CardContent
        sx={{
          p: 0,
        }}
      >
        {
          list.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                p: 3,
              }}
            >
              <Box
                component={MailboxSvg}
                sx={{
                  width: 163,
                  height: 140,
                }}
              />
              <Typography variant="h4" align="center">
                您没有收到任何消息
              </Typography>
            </Box>
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItem: 'center',
                  [theme.breakpoints.down('md')]: {
                    justifyContent: 'center',
                  },
                }}
              >
                <Pagination
                  page={page}
                  count={total}
                  color="primary"
                  onChange={handleChange}
                />
              </Box>
            </>
          )
        }
      </CardContent>
    </Card>
  );
};

export default Notice;

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'utils/axios';
import { AuthGuard, Page } from 'components';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  content: {
    padding: 0,
  },
  header: {
    paddingBottom: theme.spacing(3),
  },
}));
const HelloWorld = () => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/person');
      if (response.status === 200) {
        console.log(response);
        setList(response.data.data);
      }
    };

    fetchData();
  }, []);
  return (
    <AuthGuard roles={['ADMINISTRATOR']}>
      <Page title="Hello World" className={classes.root}>
        <Header className={classes.header} />
        <Card>
          <CardContent className={classes.content}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>公号</TableCell>
                    <TableCell>姓名</TableCell>
                    <TableCell>性别</TableCell>
                    <TableCell>手机号</TableCell>
                    <TableCell>报销标准</TableCell>
                    <TableCell>注册时间</TableCell>
                    <TableCell>状态</TableCell>
                    <TableCell>操作</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    list.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.code}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.gender}</TableCell>
                        <TableCell>{item.mobile}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.status}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Page>
    </AuthGuard>
  );
};

export default HelloWorld;

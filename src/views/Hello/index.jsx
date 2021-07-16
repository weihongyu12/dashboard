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
import AuthGuard from 'components/AuthGuard';
import Page from 'components/Page';
import { makeStyles } from '@material-ui/styles';
import axios from 'utils/axios';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: 'primary',
  },
  content: {
    padding: 0,
  },
}));

const Hello = () => {
  const classes = useStyles();

  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/person');
      if (response.status === 200) {
        setList(response.data.data);
        console.log(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <AuthGuard roles={['ADMINISTRATOR']}>
      <Page title="Hello World" className={classes.root}>
        <Header className={classes.root} />
        <Card>
          <CardContent className={classes.content}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>应聘职位</TableCell>
                    <TableCell>姓名</TableCell>
                    <TableCell>性别</TableCell>
                    <TableCell>出生年月</TableCell>
                    <TableCell>毕业学校</TableCell>
                    <TableCell>学历</TableCell>
                    <TableCell>就学形式</TableCell>
                    <TableCell>学位</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    list.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.regJob}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.gender}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.school}</TableCell>
                        <TableCell>{item.major}</TableCell>
                        <TableCell>{item.education}</TableCell>
                        <TableCell>{item.degree}</TableCell>
                        <TableCell>{item.studymode}</TableCell>
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

export default Hello;

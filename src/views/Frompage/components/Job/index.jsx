import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  InputLabel,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
/* import { red, blue } from '@material-ui/core/colors'; */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  block: {
    marginTop: theme.spacing(2),
  },
  left: {
    marginLeft: theme.spacing(3),
  },
}));

function Job(props) {
  /* const primary = blue[500];
  const secondery = red[900]; */
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card className={classes.block}>
      <CardContent>
        <Typography variant="h4" className={classes.root}>
          工作经历
          <span style={{ color: '#f00' }}>*</span>
        </Typography>
        <Grid container justifyContent="flex-start" className={classes.left}>
          <Grid item>
            <Typography style={{ color: '#a9a9a9' }}>从大学起填写，时间需连续</Typography>
            <ButtonGroup variant="contained" color="primary">
              <Button style={{ background: '#007bff' }} onClick={handleClickOpen}>新增</Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>添加工作经历</DialogTitle>
                <DialogContent>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <InputLabel>开始时间</InputLabel>
                      <TextField type="date" variant="outlined" required fullWidth size="small" />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>结束时间</InputLabel>
                      <TextField type="date" variant="outlined" required fullWidth size="small" />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>工作单位</InputLabel>
                      <TextField required variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>担任职务</InputLabel>
                      <TextField required variant="outlined" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel>主要职责</InputLabel>
                      <TextField required variant="outlined" fullWidth size="small" />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>取消</Button>
                  <Button onClick={handleClose}>保存</Button>
                </DialogActions>
              </Dialog>
              <Button style={{ background: '#007bff' }}>修改</Button>
              <Button style={{ background: '#dc3545' }}>删除</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className={classes.left}>
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">开始时间</TableCell>
                    <TableCell align="center">结束时间</TableCell>
                    <TableCell align="center">工作单位</TableCell>
                    <TableCell align="center">工作职务</TableCell>
                    <TableCell align="center">主要职责</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={5}>No data available in table</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Job;

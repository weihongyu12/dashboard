import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  block: {
    marginTop: theme.spacing(2),
  },
}));
function Academic(props) {
  const classes = useStyles();
  return (
    <Card className={classes.block}>
      <CardContent>
        <Typography variant="h4" className={classes.root}>学术论文</Typography>
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12} md={12} lg={12}>
            <TextField variant="outlined" fullWidth size="small" multiline rows={4} placeholder="最多输入1500字" label="论文及学术科研情况" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>是否在学术组织担任现职务(提供聘书原件、复印件)</InputLabel>
              <Select label="是否在学术组织担任现职务(提供聘书原件、复印件)">
                <MenuItem value="是">是</MenuItem>
                <MenuItem value="否">否</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>是否获得省级以上人才称号(提供证书原件、复印件)</InputLabel>
              <Select label="是否获得省级以上人才称号(提供证书原件、复印件)">
                <MenuItem value="是">是</MenuItem>
                <MenuItem value="否">否</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField variant="outlined" fullWidth size="small" multiline rows={2} placeholder="最多输入200字" label="学术组织名称、现担任职务名称" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField variant="outlined" fullWidth size="small" multiline rows={2} label="人才称号名称" />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField variant="outlined" fullWidth size="small" label="其它获奖情况及需要说明的事项" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Academic;

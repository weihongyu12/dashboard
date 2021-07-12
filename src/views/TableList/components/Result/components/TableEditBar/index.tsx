import React, { useState, FC, MouseEvent } from 'react';
import {
  Button,
  Drawer,
  Grid,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  Theme,
} from '@material-ui/core';
import {
  LocalOffer as LocalOfferIcon,
  DeleteOutline as DeleteIcon,
} from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { StatusType } from 'types';

type DeleteHandler = () => void;
type MarkHandler = (status: StatusType) => void;

export interface TableEditBarProps {
  selected: string[];
  className?: string;
  onDelete?: DeleteHandler;
  onMark?: MarkHandler;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(2),
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const TableEditBar: FC<TableEditBarProps> = ({
  selected,
  className = '',
  onDelete = () => {},
  onMark = () => {},
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = selected.length > 0;

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMark = (status: StatusType) => {
    onMark(status);
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      PaperProps={{ elevation: 1 }}
      variant="persistent"
    >
      <div className={clsx(classes.root, className)}>
        <Grid
          alignItems="center"
          container
          spacing={2}
        >
          <Hidden smDown>
            <Grid
              item
              md={3}
            >
              <Typography
                color="textSecondary"
                variant="subtitle1"
              >
                选中
                {selected.length}
                {' '}
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            md={6}
            xs={12}
          >
            <div className={classes.actions}>
              <Button
                startIcon={<LocalOfferIcon />}
                aria-controls="mark-menu"
                aria-haspopup="true"
                onClick={handleOpen}
              >
                标记为
              </Button>
              <Menu
                id="mark-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleMark('office');
                  }}
                >
                  标记为内勤
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMark('site');
                  }}
                >
                  标记为外勤
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMark('trip');
                  }}
                >
                  标记为出差
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMark('vacation');
                  }}
                >
                  标记为休假
                </MenuItem>
              </Menu>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                删除
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

export default TableEditBar;

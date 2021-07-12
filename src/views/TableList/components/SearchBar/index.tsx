import React, { useState, FC } from 'react';
import { Grid, Button, Theme } from '@material-ui/core';
import { FilterList as FilterListIcon } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Search, { SearchHandler } from './components/Search';
import Filter, { FilterHandler, FilterResult } from './components/Filter';

export interface SearchBarProps {
  className?: string;
  onSearch?: SearchHandler;
  onFilter?: FilterHandler;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
  },
  search: {
    flexGrow: 1,
    maxWidth: 480,
    flexBasis: 480,
  },
  filterButton: {
    marginLeft: 'auto',
  },
}));

const SearchBar: FC<SearchBarProps> = ({
  className = '',
  onSearch = () => {},
  onFilter = () => {},
}) => {
  const classes = useStyles();

  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  const handleFilter = (filter: FilterResult) => {
    onFilter(filter);
  };

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid item>
        <Search
          className={classes.search}
          onSearch={onSearch}
        />
      </Grid>
      <Grid item>
        <Button
          className={classes.filterButton}
          color="primary"
          onClick={handleFilterOpen}
          size="small"
          variant="outlined"
          startIcon={<FilterListIcon />}
        >
          高级搜索
        </Button>
      </Grid>
      <Filter
        onClose={handleFilterClose}
        onFilter={handleFilter}
        open={openFilter}
      />
    </Grid>
  );
};

export default SearchBar;

import React, { useState, FC } from 'react';
import {
  Button,
  Stack,
  useMediaQuery,
  Theme,
} from '@mui/material';
import { FilterList as FilterListIcon } from '@mui/icons-material';
import { makeStyles, createStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import Search, { SearchHandler } from './components/Search';
import Filter, { FilterHandler, FilterResult } from './components/Filter';

export interface SearchBarProps {
  className?: string;
  onSearch?: SearchHandler;
  onFilter?: FilterHandler;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
  search: {
    flexGrow: 1,
    maxWidth: 480,
    [theme.breakpoints.up('sm')]: {
      flexBasis: 480,
    },
  },
}));

const SearchBar: FC<SearchBarProps> = function SearchBar({
  className = '',
  onSearch = () => {},
  onFilter = () => {},
}) {
  const classes = useStyles();

  const [openFilter, setOpenFilter] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    <>
      <Stack
        className={clsx(classes.root, className)}
        spacing={2}
        direction={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems={isMobile ? 'stretch' : 'center'}
        flexWrap="wrap"
      >
        <Search
          className={classes.search}
          onSearch={onSearch}
        />
        <Button
          size="small"
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            alignSelf: 'flex-end',
          }}
          onClick={handleFilterOpen}
        >
          高级搜索
        </Button>
      </Stack>
      <Filter
        open={openFilter}
        onClose={handleFilterClose}
        onFilter={handleFilter}
      />
    </>
  );
};

export default SearchBar;

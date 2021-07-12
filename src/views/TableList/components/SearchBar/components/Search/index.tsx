import React, { useState, FC, ChangeEvent } from 'react';
import {
  Paper,
  Button,
  Input,
  InputAdornment,
  Theme,
} from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/styles';
import clsx from 'clsx';

export type SearchHandler = (keyword: string) => void;

export interface SearchProps {
  className?: string;
  onSearch?: SearchHandler;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: blueGrey[700],
  },
  searchInput: {
    flexGrow: 1,
  },
  searchButton: {
    marginLeft: theme.spacing(2),
  },
}));

const Search: FC<SearchProps> = ({
  className = '',
  onSearch = () => {},
}) => {
  const classes = useStyles();

  const [keyword, setKeyword] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <Paper
        className={classes.search}
        elevation={1}
      >
        <Input
          value={keyword}
          className={classes.searchInput}
          disableUnderline
          type="search"
          placeholder="工号/姓名/手机号"
          onChange={handleChange}
          startAdornment={(
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )}
        />
      </Paper>
      <Button
        className={classes.searchButton}
        onClick={handleSearch}
        size="large"
        variant="contained"
      >
        搜索
      </Button>
    </div>
  );
};

export default Search;

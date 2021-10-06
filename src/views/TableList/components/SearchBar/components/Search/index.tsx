import React, { useState, FC, ChangeEvent } from 'react';
import {
  Paper,
  Button,
  Input,
  InputAdornment,
  Stack,
  Theme,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { Search as SearchIcon } from '@mui/icons-material';
import { makeStyles, createStyles } from '@mui/styles';
import clsx from 'clsx';

export type SearchHandler = (keyword: string) => void;

export interface SearchProps {
  className?: string;
  onSearch?: SearchHandler;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {},
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
    minWidth: 80,
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
    <Stack
      className={clsx(classes.root, className)}
      spacing={2}
      direction="row"
      alignItems="center"
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
    </Stack>
  );
};

export default Search;

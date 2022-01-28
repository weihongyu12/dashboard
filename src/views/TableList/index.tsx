import React, {
  useCallback,
  useEffect,
  useState,
  FC,
} from 'react';
import { Stack } from '@mui/material';
import { useSnackbar } from 'notistack';
import AuthGuard from 'components/AuthGuard';
import Page from 'components/Page';
import { personService } from 'service';
import { Order, PersonResponse } from 'types';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { FilterResult } from './components/SearchBar/components/Filter';
import Result, { Field } from './components/Result';

const TableList: FC = function TableList() {
  const [data, setData] = useState<PersonResponse[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>('');
  const [filter, setFilter] = useState<FilterResult>({});
  const [order, setOrder] = useState<Order>('asc');
  const [sortby, setSortby] = useState<Field | ''>('');

  const { enqueueSnackbar } = useSnackbar();

  const fetchData = useCallback(async () => {
    try {
      const response = await personService.index({
        page: currentPage,
        size: rowsPerPage,
        sortby,
        order: sortby ? order : undefined,
        keyword,
        ...filter,
      });
      setData([...response.data]);
      setPages(response.meta.total);
    } catch (e) {
      if (e instanceof Error) {
        enqueueSnackbar(e.message, {
          variant: 'error',
        });
      }
    }
  }, [currentPage, rowsPerPage, sortby, order, keyword, filter, enqueueSnackbar]);

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(0);
  };

  const handleSort = (property: Field) => {
    const isAsc = sortby === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setSortby(property);
    setCurrentPage(0);
  };

  const handleSearch = (search: string) => {
    setKeyword(search);
    setCurrentPage(0);
  };

  const handleFilter = (search: FilterResult) => {
    setFilter(search);
    setCurrentPage(0);
  };

  const handleDelete = () => {
    setCurrentPage(0);
  };

  const handleMark = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, rowsPerPage, sortby, order, keyword, filter, fetchData]);

  return (
    <AuthGuard roles={['ADMINISTRATOR']}>
      <Page
        title="表格列表"
        sx={{
          p: 3,
        }}
      >
        <Stack spacing={2}>
          <Header />
          <SearchBar
            onSearch={handleSearch}
            onFilter={handleFilter}
          />
          <Result
            data={data}
            count={pages}
            rowsPerPage={rowsPerPage}
            page={currentPage}
            sortby={sortby}
            order={order}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onSort={handleSort}
            onDelete={handleDelete}
            onMark={handleMark}
          />
        </Stack>
      </Page>
    </AuthGuard>
  );
};

export default TableList;

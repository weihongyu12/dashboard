import React, {
  useCallback,
  useState,
  FC,
  MouseEvent,
  ChangeEvent,
} from 'react';
import {
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import {
  Edit as EditIcon,
  ArrowForward as ArrowForwardIcon, Close as CloseIcon,
} from '@mui/icons-material';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import zhHansLocale from 'date-fns/locale/zh-CN';
import accounting from 'accounting';
import { toInteger } from 'lodash';
import { useSnackbar, SnackbarKey } from 'notistack';
import { personService } from 'service';
import Tag from 'components/Tag';
import { Order, StatusType, PersonResponse } from 'types';
import TableEditBar from './components/TableEditBar';

export type Field = 'code' | 'name' | 'amount' | 'date';

type ChangePageHandler = (page: number) => void;
type ChangeRowsPerPageHandler = (rowsPerPage: number) => void;
type SortHandler = (property: Field) => void;
type DeleteHandler = () => void;
type MarkHandler = () => void;

interface Status {
  label: string;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
}

type StatusMap = Record<StatusType, Status>;

export interface ResultProps {
  data: PersonResponse[];
  page: number;
  count: number;
  rowsPerPage: number;
  sortby?: Field | '';
  order?: Order;
  className?: string;
  onChangePage?: ChangePageHandler;
  onChangeRowsPerPage?: ChangeRowsPerPageHandler;
  onSort?: SortHandler;
  onDelete?: DeleteHandler;
  onMark?: MarkHandler;
}

const statusMap: StatusMap = {
  office: {
    label: '内勤',
    color: 'primary',
  },
  site: {
    label: '外勤',
    color: 'success',
  },
  trip: {
    label: '出差',
    color: 'warning',
  },
  vacation: {
    label: '休假',
    color: 'error',
  },
};

const useStyles = makeStyles(() => createStyles({
  root: {},
}));

const Result: FC<ResultProps> = function Result({
  data,
  page,
  count,
  rowsPerPage,
  sortby = '',
  order = 'asc',
  className = '',
  onChangePage = () => {},
  onChangeRowsPerPage = () => {},
  onSort = () => {},
  onDelete = () => {},
  onMark = () => {},
}) {
  const classes = useStyles();

  const [selected, setSelected] = useState<string[]>([]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChangeRowsPerPage(toInteger(event.target.value));
  };

  const handleClick = (property: Field) => (event: React.MouseEvent<unknown>) => {
    onSort(property);
  };

  const handleSelectedAll = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedAll = event.target.checked;
    if (selectedAll) {
      const selectedIds = data.map((value) => value.id);
      setSelected([...selectedIds]);
    } else {
      setSelected([]);
    }
  };

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    const index = selected.findIndex((value) => value === event.target.value);

    if (index >= 0) {
      const newSelected = selected;
      newSelected.splice(index, 1);
      setSelected([...newSelected]);
    } else {
      const newSelected = [...selected, event.target.value];
      setSelected([...newSelected]);
    }
  };

  const handleMark = async (status: StatusType) => {
    try {
      await personService.mark(selected, status);
      setSelected([]);
    } catch (e) {
      if (e instanceof Error) {
        enqueueSnackbar(e.message, {
          variant: 'error',
        });
      }
    }
  };

  const handleSnackbarAction = useCallback((key: SnackbarKey) => (
    <>
      <Button
        color="inherit"
        size="small"
      >
        撤销
      </Button>
      <IconButton
        color="inherit"
        size="small"
        onClick={() => {
          closeSnackbar(key);
        }}
      >
        <CloseIcon />
      </IconButton>
    </>
  ), [closeSnackbar]);

  const handleDelete = async () => {
    try {
      await personService.destroy(selected);
      onDelete();
      setSelected([]);
      enqueueSnackbar('删除成功', {
        variant: 'success',
        action: handleSnackbarAction,
      });
    } catch (e) {
      if (e instanceof Error) {
        enqueueSnackbar(e.message, {
          variant: 'error',
        });
      }
    }
  };

  return (
    <Paper className={clsx(classes.root, className)}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  value="全选/全不选"
                  onChange={handleSelectedAll}
                />
              </TableCell>
              <TableCell
                sortDirection={sortby === 'code' ? order : false}
              >
                <TableSortLabel
                  active={sortby === 'code'}
                  direction={sortby === 'code' ? order : 'asc'}
                  onClick={handleClick('code')}
                >
                  工号
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={sortby === 'name' ? order : false}
              >
                <TableSortLabel
                  active={sortby === 'name'}
                  direction={sortby === 'name' ? order : 'asc'}
                  onClick={handleClick('name')}
                >
                  姓名
                </TableSortLabel>
              </TableCell>
              <TableCell>性别</TableCell>
              <TableCell>手机号</TableCell>
              <TableCell
                sortDirection={sortby === 'amount' ? order : false}
              >
                <TableSortLabel
                  active={sortby === 'amount'}
                  direction={sortby === 'amount' ? order : 'asc'}
                  onClick={handleClick('amount')}
                >
                  报销标准
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={sortby === 'date' ? order : false}
              >
                <TableSortLabel
                  active={sortby === 'date'}
                  direction={sortby === 'date' ? order : 'asc'}
                  onClick={handleClick('date')}
                >
                  注册时间
                </TableSortLabel>
              </TableCell>
              <TableCell>状态</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      value={row.id}
                      checked={selected.includes(row.id)}
                      onChange={handleCheck}
                    />
                  </TableCell>
                  <TableCell>
                    #
                    {row.code}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{accounting.formatMoney(row.amount, '¥')}</TableCell>
                  <TableCell>{format(parseISO(row.date), 'PPP', { locale: zhHansLocale })}</TableCell>
                  <TableCell>
                    <Tag color={statusMap[row.status].color}>
                      {statusMap[row.status].label}
                    </Tag>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="编辑">
                      <IconButton aria-label="编辑" size="large">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="查看详情">
                      <IconButton aria-label="查看详情" size="large">
                        <ArrowForwardIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: { 'aria-label': '每页行数' },
          native: true,
        }}
        component="div"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TableEditBar
        selected={selected}
        onDelete={handleDelete}
        onMark={handleMark}
      />
    </Paper>
  );
};

export default Result;

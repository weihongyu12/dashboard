import { Localization } from 'material-table';

const materialTableLocalization: Localization = {
  body: {
    emptyDataSourceMessage: '无记录可显示',
    addTooltip: '添加',
    deleteTooltip: '删除',
    editTooltip: '编辑',
    filterRow: {
      filterPlaceHolder: '',
      filterTooltip: '筛选',
    },
    editRow: {
      deleteText: '您确定要删除此行吗？',
      cancelTooltip: '取消',
      saveTooltip: '保存',
    },
  },
  grouping: {
    placeholder: '拖动标题...',
    groupedBy: '分组依据：',
  },
  header: {
    actions: '操作',
  },
  pagination: {
    labelDisplayedRows: '{from}-{to} 共 {count}',
    labelRowsSelect: '行数',
    labelRowsPerPage: '每页行数：',
    firstAriaLabel: '第一页',
    firstTooltip: '第一页',
    previousAriaLabel: '上一页',
    previousTooltip: '上一页',
    nextAriaLabel: '下一页',
    nextTooltip: '下一页',
    lastAriaLabel: '最后一页',
    lastTooltip: '最后一页',
  },
  toolbar: {
    addRemoveColumns: '添加或删除列',
    nRowsSelected: '已选择{0}行',
    showColumnsTitle: '显示列',
    showColumnsAriaLabel: '显示列',
    exportTitle: '导出',
    exportAriaLabel: '导出',
    exportCSVName: '导出为CSV',
    exportPDFName: '导出为PDF',
    searchTooltip: '搜索',
    searchPlaceholder: '搜索',
  },
};

export default materialTableLocalization;

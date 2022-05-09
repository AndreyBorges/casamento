const initOrderList = (arr, orderBy) =>
  arr.sort((a, b) =>
    a[orderBy] > b[orderBy] ? 1 : b[orderBy] > a[orderBy] ? -1 : 0
  );
export default initOrderList;

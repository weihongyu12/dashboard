import mock from 'utils/mock';

mock.onPut('/api/account').reply(200, {
  result: 'success',
});

mock.onPut('/api/account/change-password').reply(200, {
  result: 'success',
});

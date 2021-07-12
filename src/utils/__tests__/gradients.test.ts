import gradients from '../gradients';

describe('gradients', () => {
  it('gradients.grey', () => {
    expect(gradients.grey)
      .toEqual('linear-gradient(180deg, #bdbdbd 0%, #757575 100%)');
  });

  it('gradients.blue', () => {
    expect(gradients.blue)
      .toEqual('linear-gradient(180deg, #1976d2 0%, #0d47a1 100%)');
  });

  it('gradients.indigo', () => {
    expect(gradients.indigo)
      .toEqual('linear-gradient(180deg, #5c6bc0 0%, #3949ab 100%)');
  });

  it('gradients.green', () => {
    expect(gradients.green)
      .toEqual('linear-gradient(180deg, #66bb6a 0%, #43a047 100%)');
  });

  it('gradients.orange', () => {
    expect(gradients.orange)
      .toEqual('linear-gradient(180deg, #ffa726 0%, #f57c00 100%)');
  });

  it('gradients.red)', () => {
    expect(gradients.red)
      .toEqual('linear-gradient(180deg, #f44336 0%, #d32f2f 100%)');
  });
});

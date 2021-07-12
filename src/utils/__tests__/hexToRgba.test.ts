import hexToRgba from '../hexToRgba';

describe('hexToRgba', () => {
  it('covert full hex color', () => {
    const rgba = hexToRgba('#ffffff', 1);
    expect(rgba)
      .toEqual('rgba(255, 255, 255, 1)');
  });

  it('covert short hex color', () => {
    const rgba = hexToRgba('#fff', 1);
    expect(rgba)
      .toEqual('rgba(255, 255, 255, 1)');
  });

  it('covert full hex color is not \'#\'', () => {
    const rgba = hexToRgba('ffffff', 1);
    expect(rgba)
      .toEqual('rgba(255, 255, 255, 1)');
  });

  it('covert short hex color is not \'#\'', () => {
    const rgba = hexToRgba('fff', 1);
    expect(rgba)
      .toEqual('rgba(255, 255, 255, 1)');
  });
});

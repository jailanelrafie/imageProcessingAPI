import { resizeImage } from '../index';

describe('Image processing', () => {
  it('returns a result', async () => {
    const result = await resizeImage('sandg', '200', '300');
    expect(result).toBeTruthy();
  });
});

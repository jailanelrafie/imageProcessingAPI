import supertest from 'supertest';
import routes from '../server';

const request = supertest(routes);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets the image processing endpoint', async () => {
    const response = await request.get('/api/impro');
    expect(response.status).toBe(200);
  })
});

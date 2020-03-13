import { expect } from 'chai';
import { agent } from 'supertest';

describe('API /sample', function() {
  const req = agent(`http://localhost:${process.env.EXPRESS_PORT}`);
  const resource = 'sample';

  it('GET /', async () => {
    const res = await req.get(`/${resource}`);
    expect(res.status).to.eq(200);
  });

  it('GET /:id', async () => {
    const res = await req.get(`/${resource}/1`);
    expect(res.status).to.eq(200);
  });

  it('POST /', async () => {
    const res = await req.post(`/${resource}`);
    expect(res.status).to.eq(200);
  });

  it('PATCH /:id', async () => {
    const res = await req.patch(`/${resource}/1`);
    expect(res.status).to.eq(200);
  });

  it('DELETE /:id', async function() {
    const res = await req.del(`/${resource}/1`);
    expect(res.status).to.eq(204);
  });
});

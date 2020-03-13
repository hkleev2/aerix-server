import { expect } from 'chai';
import { agent } from 'supertest';
import { getRepository } from 'typeorm';
import { Corporation } from '../../src/entity';

describe('API /corporation', function() {
  const req = agent(`http://localhost:${process.env.EXPRESS_PORT}`);
  const resource = 'corporation';

  it('Corporation 생성', async function() {
    // Given
    const name = '회사1';
    const corporationRepository = getRepository(Corporation);
    corporationRepository.clear();

    // When
    const res = await req.post('/').send({
      name,
    });

    // Then
    expect(res.status).to.eq(200);
    expect(res.body).to.be('object');
    expect(res.body.name).to.eq(name);
    expect(res.body).to.have.property('id');
  });

  it('DELETE /:id', async function() {
    const res = await req.del(`/${resource}/1`);
    expect(res.status).to.eq(204);
  });
});

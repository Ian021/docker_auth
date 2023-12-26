import assert from 'assert'
import { app } from '../../server'

import supertest from 'supertest'

const request = supertest(app)

describe('/GET Check', function () {
  it('responds with ok', async function () {
    const response = await request.get('/check')
    expect(response.status).toEqual(200)
    expect(response.body.status).toEqual('OK')
  })
})

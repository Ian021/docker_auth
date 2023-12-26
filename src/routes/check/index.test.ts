import { app } from '../../server'

import supertest from 'supertest'

const request = supertest(app)

describe('/GET Check', () => {
  it('should respond with ok', async () => {
    const response = await request.get('/check')
    expect(response.status).toEqual(200)
    expect(response.body.status).toEqual('OK')
  })
})

describe('/GET Check/DB', () => {
  it('should connect with database', async () => {
    const response = await request.get('/check/db')
    expect(response.status).toEqual(200)
  })
})

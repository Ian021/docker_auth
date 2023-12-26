import { app } from '../../server'

import supertest from 'supertest'

const request = supertest(app)

describe('/GET Users', () => {
  it('responds with an array', async () => {
    const response = await request.get('/users')
    expect(response.status).toEqual(200)
    expect(response.body).toBeInstanceOf(Array)
  })
})

describe('/POST Users', () => {
  it('responds with ok', async () => {
    const response = await request.post('/users')
    expect(response.status).toEqual(200)
    // expect(response.body).toEqual('OK')
  })
})

describe('/DELETE Users/:id', () => {
  it('responds with no content', async () => {
    const response = await request.delete('/users')

    expect(response.status).toEqual(204)
    expect(Object.keys(response.body).length).toEqual(0)
  })
})

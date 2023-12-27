import { app } from '../../server'

import supertest from 'supertest'

const request = supertest(app)

describe('/GET Users', () => {
  it('should return unauthorized', async () => {
    const response = await request.get('/users')
    expect(response.status).toEqual(401)
  })
})

describe('/GET Users/:id', () => {
  it('should return unauthorized', async () => {
    const response = await request.get('/users/1')
    expect(response.status).toEqual(401)
  })
})

describe('/POST Users', () => {
  it('should return unauthorized', async () => {
    const response = await request.post('/users')
    expect(response.status).toEqual(401)
  })
})

describe('/PUT Users/:id', () => {
  it('should return unauthorized', async () => {
    const response = await request.put('/users/1')
    expect(response.status).toEqual(401)
  })
})

describe('/DELETE Users/:id', () => {
  it('should return unauthorized', async () => {
    const response = await request.delete('/users')
    expect(response.status).toEqual(401)
  })
})

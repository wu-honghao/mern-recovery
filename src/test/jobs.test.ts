import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../app.js'

describe('jobs',()=>{
    it('should return 401 when requesting jobs without token', async () => {
        // 准备 app
        // → 模拟 HTTP 请求
        // → 检查结果

        const res = await request(app).get('/jobs')

        expect(res.status).toBe(401)
    })

    // 1. 登录拿 token
    // → GET /jobs 带 Authorization
    // → expect 200
    it('should return 200 when get jobs with token',async ()=>{
        const resLogin = await request(app).post('/auth/login').send({
            email:'okeahh5@gmail.com',
            password: '123455'
        })

        const res = await request(app).get('/jobs').set('Authorization',`Bearer ${resLogin.body.data.token}`)

        expect(res.status).toBe(200)
    })
})
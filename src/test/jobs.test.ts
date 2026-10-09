import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import app from '../app.js'
import bcrypt from 'bcryptjs'
import { UserModel } from '../models/userModel.js'

const GETJOB_EMAIL = 'test-job-002@example.com'

beforeAll(async ()=>{
    // create test user
    const hashedPassword = await bcrypt.hash('1223444', 10)
    await UserModel.create({
        email: GETJOB_EMAIL,
        password: hashedPassword
    })
})
afterAll(async ()=>{
    await UserModel.deleteMany({
        email: {
            $in:[GETJOB_EMAIL]
        }
    })
})

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
            email: GETJOB_EMAIL,
            password: '1223444'
        })

        const res = await request(app).get('/jobs').set('Authorization',`Bearer ${resLogin.body.data.token}`)

        expect(res.status).toBe(200)
    })
})
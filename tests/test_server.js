import request from 'supertest';
import express from 'express';

const app = express();
app.get('/', (req, res) => res.send('Hello, DevSecOps World!'));

describe('GET /', () => {
    it('should return Hello, DevSecOps World!', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello, DevSecOps World!');
        expect(res.statusCode).toBe(200);
    });
});

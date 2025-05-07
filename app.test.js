const request = require('supertest');

const app = require('./app'); 

describe('GET /status', () => {
    it('responds with status OK', async () => {
        const response = await request(app).get('/status');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('ok');
    });
});

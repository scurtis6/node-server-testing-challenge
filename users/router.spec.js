const request = require('supertest');

const server = require('../api/server');

describe('users router', function() {
    it('should run the tests', function () {
        expect(true).toBe(true);
    });

    describe('GET /', function() {
        it('should return 200 OK', function () {
            return request(server).get('/api/users').then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('should return JSON formatted body', function () {
            return request(server).get('/api/users').then(res => {
                expect(res.type).toMatch(/json/);
            });
        });

        it('should return users as the router value', function () {
            return request(server).get('/api/users').then(res => {
                expect(res.body.router).toBe('users')
            });
        });

        it('should return users as the router value (aysnc verison)', async function () {
            const res = await request(server).get('/api/users')
                expect(res.body.router).toBe('users')
        });
    });
});
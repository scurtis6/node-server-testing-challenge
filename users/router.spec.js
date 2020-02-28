const request = require('supertest');

const server = require('../api/server');

describe('users router', function() {
    it('should run the tests', function () {
        expect(true).toBe(true);
    });

    describe('GET /', function() {
        it('should return 200 OK', function() {
            return request(server).get('/api/users').then(res => {
                expect(res.status).toBe(200);
            });
        });

        describe('DELETE /', function() {
            it('should return 200 OK', function() {
                return request(server).delete('/api/users/:id').then(res => {
                    expect(res.status).toBe(200)
                })
            })
        })

        it('should return JSON formatted body', function () {
            return request(server).get('/api/users').then(res => {
                expect(res.type).toMatch(/json/);
            });
        });

        it('should return a list of users', function() {
            return request(server).get('/api/users').then(res => {
                expect(Array.isArray(res.body)).toBe(true)
            });
        });
    });
});
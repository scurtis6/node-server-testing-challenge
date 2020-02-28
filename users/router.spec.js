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

        it('should return JSON formatted body', function () {
            return request(server).get('/api/users').then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });

        it('should return a list of users', function() {
            return request(server).get('/api/users').then(res => {
                expect(Array.isArray(res.body)).toBe(true)
            });
        });

        describe('POST /', function() {
            const newUser = {
                "name": "new user",
                "state": "ME",
                "username": "newuser"
            }
            it('should return 201 CREATED', function() {
                return request(server).post('/api/users').send(newUser).then(res => {
                    expect(res.status).toBe(201)
                });
            });
                it('should not allow users with the same username', function() {
                    return request(server).post('/api/users').send(newUser).then(res => {
                        expect(res.status).toBe(500)
                    });
                });
            });

        const id = 2;

        describe('PUT /', function () {
            const update = {
                "name": "testupdate",
                "state": "PA",
                "username": "test update",
            }
            it('should return 200 updated', function () {
                return request(server)
                .put(`/api/users/${id}`)
                .send(update)
                .then(res => {
                    expect(res.status).toBe(200);
                })
            })
            it('should return number of records updated', function () {
                return request(server)
                .put(`/api/users/${id}`)
                .send(update)
                .then(res => {
                    expect(res.text).toMatch*(/1/i);
                });
            });
        });

        describe('DELETE /', function() {
            it('should return 200 OK', function() {
                return request(server).delete(`/api/users/${id}`).then(res => {
                    expect(res.status).toBe(200)
                });
            });
            it('should return the number of records deleted', function () {
                return request(server).delete(`/api/users/${id}`).then(res => {
                    expect(res.text).toMatch*(/1/i);
                });
            });
        });
    });
});
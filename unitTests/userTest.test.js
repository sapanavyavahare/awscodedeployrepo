const supertest = require('supertest');
const app = require('../src/app')();

describe('testing user crud operations', () => {
    beforeEach(() => {
        console.log('testing test');
    });

    test('should create a new company', async () => {
        const res = await supertest(app)
            .post('/api/v1.0/users/companies')
            .send({
                name: 'LG',
                companyCode: 'LG',
            })
            .set('Accept', 'application/json');

        console.log('res', res.statusCode);
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('Success');
    });

    test('should create a new user', async () => {
        const res = await supertest(app)
            .post('/api/v1.0/users')
            .send({
                firstName: 'Rahul',
                lastName: 'srinivasan',
                email: 'sapana.vyavahare@happiestminds.com',
                companyId: '1',
            })
            .set('Accept', 'application/json');

        console.log('res', res.body);
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('Success');
    }, 10000);

    test('should get all users', async () => {
        const result = await supertest(app).get('/api/v1.0/users');
        console.log('res', result.body.data);
        expect(result.statusCode).toEqual(200);
        expect(result.body.status).toEqual('Success');
    });

    test('should get  user by id', async () => {
        const result = await supertest(app).get('/api/v1.0/users/1');
        console.log('res', result.body.data);
        expect(result.statusCode).toEqual(200);
        expect(result.body.status).toEqual('Success');
    });

    test('should get companies', async () => {
        const result = await supertest(app).get('/api/v1.0/users/companies');
        console.log('res', result.body.data);
        expect(result.statusCode).toEqual(200);
        expect(result.body.status).toEqual('Success');
    });
    test('should get companies with user info', async () => {
        const result = await supertest(app).get(
            '/api/v1.0/users/getCompanyUsers'
        );
        console.log('res', result.body.data);
        expect(result.statusCode).toEqual(200);
        expect(result.body.status).toEqual('Success');
    });

    test('should update  user ', async () => {
        const result = await supertest(app)
            .put('/api/v1.0/users/1')
            .send({ email: 'parag.v@gmail.com' });
        console.log('res', result.body.data);
        expect(result.statusCode).toEqual(200);
        expect(result.body.status).toEqual('Success');
    });
    test('should delete  user ', async () => {
        const result = await supertest(app).delete('/api/v1.0/users/1');

        console.log('res', result.body.data);
        expect(result.statusCode).toEqual(200);
        expect(result.body.status).toEqual('Success');
    });
    afterEach((done) => {
        done();
    });
    afterAll(async () => {
        //await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
});

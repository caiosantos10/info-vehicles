import { vehicle } from '../models/Vehicle.js';
import server from '../server.js'
import { use, expect } from 'chai';
import chaiHttp from 'chai-http';

const chai = use(chaiHttp);

describe('Vehicle CRUD Test', () => {
    it('should get one list of all vehicles', (done) => {
        chai.request(server)
            .get('/vehicles')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.lengthOf.above(0)
                done();
            });
    });
});

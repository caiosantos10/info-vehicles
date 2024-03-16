import { vehicle } from '../models/Vehicle.js';
import server from '../server.js'
import { use, expect } from 'chai';
import chaiHttp from 'chai-http';

const chai = use(chaiHttp);

describe('Vehicle CRUD Test', () => {
    before(async function() {
        await vehicle.deleteMany({});
     });
    
     after(async function() {
        await vehicle.deleteMany({});
     });
    

    it('should get one list of all vehicles', (done) => {
        chai.request(server)
            .get('/vehicles')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(0)
                done();
            });
    });
});

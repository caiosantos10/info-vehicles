import * as chai from 'chai';
import server from '../server.js'

import('chai-http').then((chaiHttp) => {

    chai.use(chaiHttp);
    const expect = chai.expect;

    describe('Vehicle CRUD Test', () => {
        it('should get one list of all vehicles', (done) => {
            chai.request(server)
                .get('/vehicles')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.body).to.have.lengthOf.above(0);
                    done();
                });
        });
    });
});
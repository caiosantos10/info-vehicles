import { vehicle } from '../models/Vehicle.js';
import server from '../server.js'
import { use, expect } from 'chai';
import chaiHttp from 'chai-http';

const chai = use(chaiHttp);

describe('Vehicle CRUD Test', () => {
    let vehicle_id = null;

    before(async function () {
        await vehicle.deleteMany({});
    });

    after(async function () {
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

    it('should create a new vehicle', (done) => {
        const newVehicle = {
            placa: "AWS1234",
            chassi: "123",
            renavam: "123",
            modelo: "Hillux",
            marca: "Toyota",
            ano: 2014,
        }

        chai.request(server)
            .post('/vehicles')
            .send(newVehicle)
            .end((err, res) => {
                vehicle_id = res.body.response._id

                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('msg');
                expect(res.body.msg).to.equal("Successfully created vehicle")
                expect(res.body).to.have.property('response');
                expect(res.body.response.placa).to.equal(newVehicle.placa);
                expect(res.body.response.chassi).to.equal(newVehicle.chassi);
                expect(res.body.response.renavam).to.equal(newVehicle.renavam);
                expect(res.body.response.modelo).to.equal(newVehicle.modelo);
                expect(res.body.response.marca).to.equal(newVehicle.marca);
                expect(res.body.response.ano).to.equal(newVehicle.ano);
                done();
            });
    });

    it('should get a specific vehicle by id', (done) => {
        chai.request(server)
            .get(`/vehicles/${vehicle_id}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('_id');
                expect(res.body._id).to.equal(vehicle_id);
                done();
            });
    });

    it('should update a specific vehicle', (done) => {
        const updatedVehicle = {
            modelo: "Uno",
            marca: "Fiat",
            ano: 2009,
        };

        chai.request(server)
            .put(`/vehicles/${vehicle_id}`)
            .send(updatedVehicle)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('msg');
                expect(res.body.msg).to.equal("Vehicle successfully updated")
            });

        /** Checking updated values */
        chai.request(server)
            .get(`/vehicles/${vehicle_id}`)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.modelo).to.equal(updatedVehicle.modelo);
                expect(res.body.marca).to.equal(updatedVehicle.marca);
                expect(res.body.ano).to.equal(updatedVehicle.ano);
                done();
            });
    });

    it('should delete a specific vehicle', (done) => {
        chai.request(server)
            .delete(`/vehicles/${vehicle_id}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('msg');
                expect(res.body.msg).to.equal('Vehicle deleted successfully');
                done();
            });
    });
});

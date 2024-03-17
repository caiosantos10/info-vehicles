import { vehicle as VehicleModel } from "../models/Vehicle.js";

class vehiclesController {
    static async create(req, res) {
        try {
            const response = await VehicleModel.create(req.body);
            res.status(201).json({ response, msg: "Successfully created vehicle" })
        } catch (error) {
            console.log(error);
        }
    }

    static async findAll(req, res) {
        try {
            const response = await VehicleModel.find();
            res.json(response)
        } catch (error) {
            console.log(error);
        }
    }

    static async findById(req, res) {
        try {
            const id = req.params.id;
            const response = await VehicleModel.findById(id);

            if (!response) {
                res.status(404).json({ msg: "Vehicle not found" });
                return;
            }
            res.json(response)
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            const response = await VehicleModel.findById(id);

            if (!response) {
                res.status(404).json({ msg: "Vehicle not found" });
                return;
            }
            const deleteVehicle = await VehicleModel.findByIdAndDelete(id);
            res.status(200).json({ msg: "Vehicle deleted successfully" });
        } catch (error) {
            console.log(error);
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const response = await VehicleModel.findByIdAndUpdate(id, req.body);

            if (!response) {
                res.status(404).json({ msg: "Vehicle not found" });
                return;
            }
            res.status(200).json({ msg: "Vehicle successfully updated" });
        } catch (error) {
            console.log(error);
        }
    }
}

export default vehiclesController;
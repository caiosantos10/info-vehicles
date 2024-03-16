import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    placa: {
        type: String,
        required: true,
        unique: true
    },
    chassi: {
        type: String,
        required: true,
        unique: true
    },
    renavam: {
        type: String,
        required: true,
        unique: true
    },
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const vehicle = mongoose.model("Vehicle", vehicleSchema);

export { vehicle };
import express from "express";
import vehiclesController from "../controllers/vehiclesController.js";

const router = express.Router();
router
    .route('/vehicles')
    .post((req, res) => vehiclesController.create(req, res));

router
    .route('/vehicles')
    .get((req, res) => vehiclesController.findAll(req, res));

router
    .route('/vehicles/:id')
    .get((req, res) => vehiclesController.findById(req, res));

router
    .route('/vehicles/:id')
    .delete((req, res) => vehiclesController.delete(req, res));

router
    .route('/vehicles/:id')
    .put((req, res) => vehiclesController.update(req, res));

export default router;

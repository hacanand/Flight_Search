const express = require("express");
const {validCreateFlight}=require("../../middlewares/index")
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirPortController = require("../../controllers/airport-controller");
const router = express.Router();
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city",CityController.getAll);
router.patch("/city/:id", CityController.update);
router.post("/flights",validCreateFlight, FlightController.create);
router.get('/flights',FlightController.getAll);

router.post("/airports", AirPortController.create);

module.exports = router;

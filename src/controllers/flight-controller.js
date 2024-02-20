const { FlightService } = require("../services/index");
const { successCodes } = require("../utils/error-codes");
const flightService = new FlightService();
const create = async (req, res) => {
    try {
      let flightRequestData = {
        flightNumber: req.body.flightNumber,
        airplaneId: req.body.airplaneId,
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        arrivalTime: req.body.arrivalTime,
        price: req.body.price,
        departureTime: req.body.departureTime,
      }
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(successCodes.CREATED).json({
      data: flight,
      success: true,
      message: "flight created successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong at controller layer",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(successCodes.OK).json({
      data: flight,
      success: true,
      message: "flight fetched successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong at controller layer",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const flight = await flightService.deleteFlight(req.params.id);
    return res.status(successCodes.OK).json({
      data: flight,
      success: true,
      message: "flight deleted successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong at controller layer",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const flight = await flightService.updateFlights(req.params.id, req.body);
    return res.status(successCodes.OK).json({
      data: flight,
      success: true,
      message: "flight updated successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong at controller layer",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.body);
    return res.status(200).json({
      data: flights,
      success: true,
      message: "flights fetched successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong at controller layer",
      err: error,
    });
  }
};
module.exports = {
  create,
  get,
  destroy,
  update,
  getAll,
};

const { FlightService } = require("../services/index");
const flightService = new FlightService();
const create = async (req, res) => {
    try {
      console.log("controller", req.body);
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
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
    return res.status(200).json({
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
    return res.status(200).json({
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
    const flight = await flightService.updateFlight(req.params.id, req.body);
    return res.status(200).json({
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
    const flights = await flightService.getAllFlights();
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

const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
  async getFlight(id) {
    try {
      const flight = await Flights.findByPk(id);
      return flight;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
  async deleteFlight(id) {
    try {
      await Flights.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
  async updateFlight(id, data) {
    try {
      const flight = await Flights.findByPk(id);
      flight.name = data.name;
      await flight.save();
      return flight;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
  async getAllFlights(filter) {
    try {
      const filterObject = this.createFilter(filter);
      const flights = await Flights.findAll();
      return flights;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
}
module.exports = FlightRepository;

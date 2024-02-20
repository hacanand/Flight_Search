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
    // if (data.minPrice && data.maxPrice) {
    //     Object.assign(filter, {
    //         [Op.and]: [
    //             { price: { [Op.gte]: data.minPrice } },
    //             { price: { [Op.lte]: data.maxPrice } }
    //        ]
    //    })
      //   }
      let priceFilter = [];
    if (data.minPrice) {
        //Object.assign(filter,{ price: { [Op.gte]: data.minPrice } })
        priceFilter.push({ price: { [Op.gte]: data.minPrice } })
    }
    if (data.maxPrice) {
        // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
        priceFilter.push({ price: { [Op.lte]: data.maxPrice } })
    }
        Object.assign(filter, { [Op.and]: priceFilter });
    return filter;
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
  async updateFlights(id, data) {
    try {
       await Flights.update(data, {
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
  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flights = await Flights.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
  
}
module.exports = FlightRepository;

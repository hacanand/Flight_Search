const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
      try {
        if (!compareTime(data.departureTime, data.arrivalTime)) {
          throw { error: "arrival time cannot be less than departure time" };
        }
      const airplane = await this.airplaneRepository.getAirPlane(
        data.airplaneId
          );
         
      if (!airplane) {
          throw { error: "Airplane not found" };
      }
      const flight = await this.flightRepository.createFlight({
          ...data,
          totalSeats: airplane.capacity,
      }); 
      return flight;
    } catch (error) {
      console.log("something went wrong in the  flight service layer");
      throw { error };
    }
  }
  async getFlight(id) {
    try {
      const flight = await this.flightRepository.getFlight(id);
      return flight;
    } catch (error) {
      console.log("something went wrong in the  flight service layer");
      throw { error };
    }
  }
  async deleteFlight(id) {
    try {
      await this.flightRepository.deleteFlight(id);
      return true;
    } catch (error) {
      console.log("something went wrong in the  flight service layer");
      throw { error };
    }
  }
  async updateFlights(id, data) {
    try {
      const flight = await this.flightRepository.updateFlights(id, data);
      return flight;
    } catch (error) {
      console.log("something went wrong in the  flight service layer");
      throw { error };
    }
  }
  async getAllFlights(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("something went wrong in the  flight service layer");
      throw { error };
    }
  }
}
module.exports = FlightService;

/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * departureTime
 * arrivalTime
 * price
 * totalSeats
 *
 */

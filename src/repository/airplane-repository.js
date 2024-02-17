const { Airplane } = require('../models/index');
class AirplaneRepository {
  async getAirPlane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
  async createAirplane(data) {
    try {
      const airplane = await Airplane.create(data);
      return airplane;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
  async deleteAirplane(id) {
    try {
      await Airplane.destroy({
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
  async updateAirplane(id, data) {
    try {
      const airplane = await Airplane.findByPk(id);
      airplane.name = data.name;
      await airplane.save();
      return airplane;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
  async getAllAirplanes() {
    try {
      const airplanes = await Airplane.findAll();
      return airplanes;
    } catch (error) {
      console.log("something went wrong in the  flight repository layer");
      throw { error };
    }
  }
}
module.exports = AirplaneRepository;
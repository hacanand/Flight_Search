const { AirPortRepository } = require("../repository/index");
const CrudService = require("./crud-service");
class AirPortService extends CrudService {
    constructor( ) {
      const airPortRepository = new AirPortRepository();
    super(airPortRepository);
  }
}
module.exports = AirPortService;
const { Model } = require("sequelize");
const CrudRepository = require("./crud-repository");
const {Airport}=require("../models/index");
class AirPortRepository extends CrudRepository {
  constructor( ) {
    super(Airport);
  }
}
module.exports = AirPortRepository;
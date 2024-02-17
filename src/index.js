const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routers/index')
const {City,Airport} = require("./models/index");
const db = require("./models/index");
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))
  app.use("/api", ApiRoutes);
  app.listen(PORT,async () => {
    console.log(`server started at ${PORT}`);
    // if (process.env.SYNC_DB) {
    //   db.sequelize.sync({ alter: true });
    // }
    // const city = await City.findOne({
    //   where: {
    //     id:10
    //   }
    // })
    // const airports = await city.getAirports();
    
//const airports = await Airport.findAll({
  //     include: City,
  //   });
   //console.log(city,airports);
    });
};
setupAndStartServer();

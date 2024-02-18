const { AirPortService } = require("../services/index");
const airportService = new AirPortService();
const create = async (req, res) => {

    try {
        const response = await airportService.create(req.body);
        res.status(201).json({
            data: response,
            success: true,
            message: "airport created successfully",
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "something went wrong in the controller layer",
        });
    }
}
module.exports = {
    create,
}
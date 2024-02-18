const validCreateFlight = (req, res, next)=>{
    if (req.body.flightNumber && req.body.airplaneId  && req.body.departureAirportId && req.body.arrivalAirportId && req.body.arrivalTime && req.body.price && req.body.departureTime) {
        next()
    }else{
        res.status(400).json({
            success: false,
            data:{},
            message: "Invalid request!! missing required fields",
            err:'add missing fields'
        })
    }
}
module.exports = {
    validCreateFlight
}
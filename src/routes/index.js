const router = require("express").Router();

const userRoute = require("./userRoute")
const requestRoute = require("./requestRoute")
const paymentRoute = require("./paymentRoute");

const TrendCtrl = require('../controllers/TrendController');

module.exports = () => {
     router.get("/test", (req, res) => res.send("Yeah it works!"));

     router.use("/users", userRoute());
     router.use("/request", requestRoute());
     router.use("/payment",paymentRoute);

     router.use("/trend", TrendCtrl.getTrends);




     return router;
};
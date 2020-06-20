const router = require("express").Router();

const userRoute = require("./userRoute");
const requestRoute = require("./requestRoute");
const recommendationRoute = require("./recommendationRoute");
const paymentRoute = require("./paymentRoute");
const trendRoute = require('./trendRoute');

module.exports = () => {
  router.get("/test", (req, res) => res.send("Yeah it works!"));

  router.use("/users", userRoute());
  router.use("/request", requestRoute());
  router.use("/vouch", recommendationRoute());
  router.use("/payment", paymentRoute);
  router.use("/trend", trendRoute);




     return router;
};

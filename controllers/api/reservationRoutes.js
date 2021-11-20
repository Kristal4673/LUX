const router = require("express").Router();
const { Reservation, Car } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newReservation = await Reservation.create({
      ...req.body,
      user_id: req.session.user_id,

    });
    console.log(newReservation);
    res.status(200).json(newReservation);

  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;

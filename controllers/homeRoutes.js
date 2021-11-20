const router = require("express").Router();
const { User, Car, Reservation } = require("../models");
const withAuth = require("../utils/auth");

// MB: getting all cars
router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    console.log("88888888888888888888888888888888888888");
    const dbCarData = await Car.findAll();
    // {
    // include: [
    //   {
    //     model: User,
    //     attributes: ['name'],
    //   },
    // ],
    // }

    console.log("This is logged in", req.session.logged_in);
    // Serialize data so the template can read it
    const cars = dbCarData.map((car) => car.get({ plain: true }));
    console.log(cars, 'carf')
    // Pass serialized data and session flag into template
    res.render("homepage", {
      cars,
      logged_in: req.session.logged_in || false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// MB: getting one car
router.get("/car/:id", async (req, res) => {
  // console.log("car id works");
  try {
    const carData = await Car.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: User,
      //     attributes: ["name"],
      //   },
      // ],
    });
    // console.log(carData);
    if (!carData) {
      res.status(404).json({ message: "No car found with that id!" });
    }
    const car = carData.get({ plain: true });
    console.log(car);
    res.render("singleCar", {
      ...car,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to reservation
router.get("/reservation/:id", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      // MB: PENDING ADDING RESERVATION FIELDS
      include: [{ model: Reservation, Car }],
    });

    const user = userData.get({ plain: true });

    res.render("reservation", {
      ...user,
      carid: req.params.id,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// MB: TESTING THIS ROUTE TO GET TO /success
// Use withAuth middleware to prevent access to succesful reservation
// router.get("/success/:id", withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const reservationData = await Reservation.findByPk(req.params.id, {
//       include: [{ model: User, Car }],
//     });

//     const reservation = reservationData.get({ plain: true });

//     res.render("success", {
//       ...reservation,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// router.get("/signin", (req, res) => {
//   res.render("signin");
// });

module.exports = router;

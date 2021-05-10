const express = require("express");

const personsController = require("../controllers/persons");

const router = express.Router();

router.post("/person", personsController.addPerson);

router.get("/person", personsController.getAllPerson);

router.get("/person/:id", personsController.getPerson);

router.delete("/person/:id", personsController.deletePerson);

router.put("/person/:id", personsController.updatePerson);

module.exports = router;

// {
//     "person" : {
//         "name": "paul",
//         "email": "paul@gmail.com",
//         "country": "jamacia"
//     }
// }

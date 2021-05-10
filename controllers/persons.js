const Person = require("../models/Person");

exports.getPerson = (req, res, next) => {
  Person.findById(req.params.id, (err, person) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!person) {
      return res.status(404).json({ message: "person not found" });
    } else {
      return res.status(200).json({ person });
    }
  });
};

exports.getAllPerson = (req, res, next) => {
  Person.find({}, (err, person) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ person });
    }
  });
};

exports.addPerson = (req, res, next) => {
  Person.create(
    {
      name: req.body.person.name,
      email: req.body.person.email,
      country: req.body.person.country,
    },
    (err, newPerson) => {
      console.log(newPerson);
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res
          .status(200)
          .json({ message: "new client data created ", newPerson });
      }
    }
  );
};

exports.deletePerson = (req, res, next) => {
  Person.findByIdAndDelete(req.params.id, (err, person) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!person) {
      return res.status(404).json({ message: "person not found" });
    } else {
      return res.status(200).json({ message: "person deleted succesfully" });
    }
  });
};

exports.updatePerson = (req, res, next) => {
  Person.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.person.name,
      email: req.body.person.email,
      country: req.body.person.country,
    },
    (err, person) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!person) {
        return res.status(404).json({ message: "person not found" });
      } else {
        return res.status(200).json({ message: "person updated succesfully" });
      }
    }
  );
};

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: ".env" });

const dbURI = process.env.DATABASE_URL;

// const connect = mongoose.connect(dbURI, {
//   useFindAndModify: false,
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

// 28:54
// const dbconnect = connect.then(
//   (db) => {
//     console.log("Connected Successfully to Mongodb Server");
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// module.exports = dbconnect;

module.exports = () => {
  mongoose.connect(
    dbURI,
    {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected Successfully to Mongodb Server");
      }
    }
  );
};

const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

const dbSetup = require("./database/setup");
dbSetup();

const personRoutes = require("./routes/person");

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads

app.use(personRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

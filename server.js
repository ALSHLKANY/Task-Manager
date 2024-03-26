const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 8000;

// Start
const start = async () => {
  try {
    // connect DB
    await mongoose
      .connect(
        process.env.DATABASE /*, {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    }*/
      )
      .then(() => console.log("DB connection successful!"))
      .catch((err) => console.log(err));

    // Listen to port
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

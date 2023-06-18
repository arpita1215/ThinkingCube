const mongoose = require("mongoose");

const DB = process.env.DATABASE;

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://arpitavarshneya19:HRjWTY27fFpKCaKX@cluster0.f229zwu.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`connection successful`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;

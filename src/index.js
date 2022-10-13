require("dotenv").config();
const app = require("./app");
const { dbConnection } = require("./commons/config");

/**
 * The main function is a function that listens to the port that the app is running on and logs a
 * message to the console
 */
const main = async () => {
  try {
    await dbConnection();
    app.listen(app.get("port"));
    console.log(`Server on port : ${app.get("port")}`);
  } catch (error) {
    console.log(error);
  }
};

main();

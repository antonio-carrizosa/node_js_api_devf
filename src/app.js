const express = require("express");
const morgan = require("morgan");

/* Importing the productRoutes from the product.routes file. */
const contactRoutes = require("./routes/contact.routes");

const app = express();

/* Setting the port. */
app.set("port", process.env.PORT);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Importing the productRoutes from the product.routes file. */
app.use("/api/contacts", contactRoutes);

module.exports = app;

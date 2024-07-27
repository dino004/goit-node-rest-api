import mongoose from "mongoose";

import app from "./app.js";

const DB_HOST =
  "mongodb+srv://Dmytro:VQ6qozqF6wPZjWMW@cluster0.dwbfnbc.mongodb.net/db-contacts?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// VQ6qozqF6wPZjWMW

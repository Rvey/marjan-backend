const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8081;

// var corsOptions = {
//   origin: `http://localhost:${PORT}`
// };

// app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
require("./routes/promo.routes")(app);
//connect
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});

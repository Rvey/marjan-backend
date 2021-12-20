const express = require("express");
const app = express()
const cors = require("cors");
const PORT = process.env.PORT || 8080;
 // server


var corsOptions = {
  origin: `http://localhost:${PORT}`
};

app.use(cors(corsOptions));



// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


require('./routes/user.routes')(app);



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});


//connect
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});
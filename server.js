const express = require("express");
const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 8082;

// var corsOptions = {
//   origin: `http://localhost:${PORT}`
// };

// app.use(cors(corsOptions));



app.use(express.urlencoded({ extended: true }));
// cookie parser middleware
// app.use(cookieParser());


// const oneDay = 1000 * 60 * 60 * 24;
// //session middleware
// app.use(sessions({
//   secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//   saveUninitialized:false,
//   cookie: { maxAge: oneDay },
//   resave: false
// }));

app.use(cors());
app.use(express.json());
require("./routes/routes")(app);

//connect
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});

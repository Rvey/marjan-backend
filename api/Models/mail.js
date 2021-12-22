const nodemailer = require("nodemailer");

const sendMail = async (email, password) => {
  try {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rredouane3440@gmail.com",
        pass: "Red1234@",
      },
    });
    let mailDetails = {
      from: "rredouane3440@gmail.com",
      to: `${email}`,
      subject: "deltaAir flight confirmation",
      html: `hello ${password}`,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMail,
};

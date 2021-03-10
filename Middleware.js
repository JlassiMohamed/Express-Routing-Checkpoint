//Time logger middleware
module.exports = (req, res, next) => {
  var time = new Date().getTime();
  var date = new Date(time);
  var currentDate = date.toString().substring(0, 3);
  var currentHour = date.toString().substring(16, 18);
  console.log(time);
  console.log(date);
  console.table({ currentDate, currentHour });
  console.log(date.toString());
  if (
    (currentDate === "Mon" ||
      "Tue" ||
      "Wed" ||
      "Thu" ||
      "Fri" ||
      "Sat" ||
      "Sun") &&
    +currentHour >= 9 &&
    +currentHour < 17
  ) {
    next();
  } else {
    res
      .status(500)
      .send(
        "<h3 style='color:red'> Sorry! the web site is closed now. Check it later on Monday to Friday, from 9 to 17. </h3>"
      );
  }
};

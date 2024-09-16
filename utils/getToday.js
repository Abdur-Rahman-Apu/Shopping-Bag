const getToday = () => {
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();

  const year = date.getFullYear();
  const month = months[date.getMonth() + 1];
  const day = date.getDate();
  const week = weeks[date.getDay() + 1];

  return `${week}, ${day} ${month}, ${year}`;
};

export default getToday;

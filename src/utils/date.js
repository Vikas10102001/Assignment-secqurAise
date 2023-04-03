const formatDate = (date) => {
  //5-Jan-23
  const dateParts = date.split("-");
  const monthNames = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const month = monthNames[dateParts[1]];
  const day = dateParts[0] < 10 ? "0" + dateParts[0] : dateParts[0];
  const year = dateParts[2];

  const formatedDate = `${day}-${month}-${year}`;

  return formatedDate;
};

const separateDate = (date) => {
  const dateParts = date.split("-");
  const monthNames = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
  const month = monthNames[dateParts[1]];
  const daySuffix =
    ["st", "nd", "rd"][((((dateParts[0] + 90) % 100) - 10) % 10) - 1] || "th";
  const day = dateParts[0] + daySuffix;
  const year = "20" + dateParts[2];

  return [day, month, year];
};

export { formatDate, separateDate };

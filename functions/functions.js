// Date formatting helper function
const formatDate = (event) => {
  const utcDate = new Date(event);
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const standardDate = new Date(
    utcDate.getTime() + Math.abs(utcDate.getTimezoneOffset() * 60000)
  ).toLocaleDateString([], options);
  return standardDate;
};

// Time formatting helper function
const formatTime = (event) => {
  const options = { hour: "2-digit", minute: "2-digit" };
  return new Date(event).toLocaleTimeString([], options);
};

// Format military to standard time helper function
const formatMilitaryToStandardTime = (event) => {
  const militaryHours = parseInt(event.substring(0, 2));
  const standardHours = ((militaryHours + 11) % 12) + 1;
  const amPm = militaryHours > 11 ? "PM" : "AM";
  const minutes = event.substring(2, 5);
  const standardTime = `${standardHours}${minutes} ${amPm}`;
  return standardTime;
};

// Format phone number helper function
const formatPhone = (phone) => {
  if (phone.length === 9) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  }
  if (phone.length === 10) {
    return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(
      4,
      7
    )}-${phone.slice(7)}`;
  }
};

/* Generate string of 4 random alphanumeric characters for the Food Sample code 
helper function */
const generateRandomString = (len, seed = "tasttlig") => {
  seed = parseInt(seed, 36) % 10;
  if (seed === 0) {
    seed += 1;
  }
  let rand = (Math.random() * seed) % 1;
  let rand2 = (Math.random() * seed) % 1;
  return (
    rand.toString(36).substring(2, 2 + len / 2) +
    rand2.toString(36).substring(2, 2 + len / 2)
  ).toUpperCase();
};

module.exports = {
  formatDate,
  formatTime,
  formatMilitaryToStandardTime,
  formatPhone,
  generateRandomString,
};

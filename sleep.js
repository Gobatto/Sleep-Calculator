const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 8;
            break;
        case "tuesday":
            return 8;
            break;
        case "wednesday":
            return 7;
            break;
        case "thursday":
            return 8;
            break;
        case "friday":
            return 6;
            break;
        case "saturday":
            return 8;
            break;
        case "sunday":
            return 10;
        default:
            return "Error!";
    }
};
  
const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};
  
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You are sleeping enougth");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep than you needed this week. Get a job.");
    } else {
        console.log("You got " + (idealSleepHours - actualSleepHours) + " hour(s) less sleep than you needed this week. Get some rest.");
    }
};
  
  calculateSleepDebt();
  
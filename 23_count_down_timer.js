/** @format */
document.addEventListener("DOMContentLoaded", function () {
  const birthMonth = 10;
  const birthDay = 31;

  const currentYear = new Date().getFullYear();
  const nextBirthdayDate = new Date(currentYear, birthMonth - 1, birthDay);
  const nextDay = new Date(nextBirthdayDate);
  nextDay.setDate(nextBirthdayDate.getDate() + 1);
  nextDay.setHours(0, 0, 0, 0);

  const setTimer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const nextBirthdayDate = new Date(currentYear, birthMonth - 1, birthDay);

    if (nextBirthdayDate < currentDate) {
      nextBirthdayDate.setFullYear(currentYear + 1);
    }

    let display = document.getElementsByClassName("b-day_timer");

    let x = setInterval(function () {
      let now = new Date();
      let timeLeft = nextBirthdayDate - now; // Calculate the time left until the birthday

      if (now >= nextBirthdayDate) {
        // If it's the day of the birthday, display "Happy Birthday" for the entire day
        display[0].textContent = "Happy Birthday";
        return;
      }

      if (now >= nextDay) {
        // If it's the day after the birthday, reset the timer for the next year at midnight
        clearInterval(x);
        setTimeout(setTimer, nextDay - now);
        return;
      }

      const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30.44));
      timeLeft -= months * (1000 * 60 * 60 * 24 * 30.44);

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      timeLeft -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      timeLeft -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(timeLeft / (1000 * 60));
      timeLeft -= minutes * (1000 * 60);

      const seconds = Math.floor(timeLeft / 1000);

      let timerText = "Time till birthday:";

      if (months > 0) {
        timerText += ` ${months} months`;
      }

      if (days > 0) {
        timerText += ` ${days} days`;
      }

      if (hours > 0 || days > 0) {
        timerText += ` ${hours} hours`;
      }

      if (minutes > 0 || hours > 0 || days > 0) {
        timerText += ` ${minutes} minutes`;
      }

      if (seconds > 0 || hours > 0 || days > 0 || minutes > 0) {
        timerText += ` ${seconds} seconds`;
      }

      display[0].textContent = timerText;
    }, 1000);
  };

  if (new Date() >= nextBirthdayDate && new Date() < nextDay) {
    // If the current date is within the birthday date, display "Happy Birthday"
    document.getElementsByClassName("b-day_timer")[0].textContent =
      "Happy Birthday";
  } else {
    // Otherwise, start the timer
    setTimer();
  }
});

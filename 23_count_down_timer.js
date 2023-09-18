/** @format */

// # 23 Birthday count down timer
//

// ## A
document.addEventListener("DOMContentLoaded", function () {
  const birthMonth = 10;
  const birthDay = 31;

  const setTimer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const nextBirthdayDate = new Date(currentYear, birthMonth - 1, birthDay);

    if (nextBirthdayDate < currentDate) {
      nextBirthdayDate.setFullYear(currentYear + 1);
    }

    // Calculate the date for the day after the birthday
    const nextDay = new Date(nextBirthdayDate);
    nextDay.setDate(nextBirthdayDate.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);

    let display = document.getElementsByClassName("b-day_timer");

    let x = setInterval(function () {
      let now = new Date();
      let timeLeft = nextBirthdayDate - now; // Calculate the time left until the birthday

      if (now >= nextDay) {
        // If it's the day after the birthday, reset the timer for the next year at midnight
        clearInterval(x);
        setTimeout(setTimer, nextDay - now);
        return;
      }

      if (timeLeft <= 0) {
        // If the birthday has arrived, display the message
        clearInterval(x);
        display[0].textContent = "Happy Birthday";
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

      if (months > 1) {
        display[0].textContent = `Time till birthday: 
        ${months} months ${days}days ${hours} hours ${minutes} minutes ${seconds} seconds`;
      } else if (months == 1) {
        display[0].textContent = `Time till birthday: ${months} month ${days}days ${hours} hours ${minutes} minutes ${seconds} seconds`;
      } else {
        display[0].textContent = `Time till birthday: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
      }
    }, 1000);
  };

  setTimer();
});

// Moment variables and function to display current time
let now = moment().format("MMMM Do YYYY: h:mm");
let currentDay = document.getElementById("currentDay");
currentDay.innerHTML = now;

// Clear Events Button (Fix this later John)
$("#clear").click(function (event) {
  console.log(timeOfDay);
  if (timeOfDay > 3) {
    console.log("John has a huge penis");
  }
});

// Pulls the current hour from Moment into a variable
let timeOfDay = moment().format("HH");

// Loops over timeblocks and turns each of their IDs into a number
$(".timeBlock").each(function () {
  let checkHour = parseInt($(this).attr("id").split("hour")[1]);

  // Compares the current hour of the day to the number created in the previous function and applies a preset CSS class accordingly
  if (checkHour < timeOfDay) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  } else if (checkHour == timeOfDay) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});

// If it works, remove the unnecessary ID's, John

// Moment variables and function to display current time
let now = moment().format("MMMM do YYYY: h:mm");
let currentDay = document.getElementById("currentDay");
currentDay.innerHTML = now;

// Clear events button
$("#clear").click(function () {
  window.localStorage.clear();
  $(".timeBlock").val("");
});

// Pulls the current hour from Moment into a variable
let timeOfDay = moment().format("HH");

// Loops over the timeblocks and turns each of their IDs into a number
$(".timeBlock").each(function () {
  let checkHour = parseInt($(this).attr("id"));

  // Compares the current hour of the day to the number created in the previous function and applies a preset CSS class accordingly
  if (checkHour == timeOfDay) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else if (checkHour < timeOfDay) {
    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).addClass("past");
  } else if (checkHour > timeOfDay) {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});

// Allows each timeblock's save button to save the contents of the time block to local storage for later recovery
$(".saveButton").click(function () {
  let time = $(this).attr("id");
  let message = $(this).siblings(".timeBlock").val();
  window.localStorage.setItem(time, message);
});

//Pulls whatever was previously saved from local storage and places it in the correct field
$("#btn9").siblings(".timeBlock").val(localStorage.getItem("btn9"));
$("#btn10").siblings(".timeBlock").val(localStorage.getItem("btn10"));
$("#btn11").siblings(".timeBlock").val(localStorage.getItem("btn11"));
$("#btn12").siblings(".timeBlock").val(localStorage.getItem("btn12"));
$("#btn13").siblings(".timeBlock").val(localStorage.getItem("btn13"));
$("#btn14").siblings(".timeBlock").val(localStorage.getItem("btn14"));
$("#btn15").siblings(".timeBlock").val(localStorage.getItem("btn15"));
$("#btn16").siblings(".timeBlock").val(localStorage.getItem("btn16"));
$("#btn17").siblings(".timeBlock").val(localStorage.getItem("btn17"));

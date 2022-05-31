# Day-Planner-Challenge

## Assignment

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Methodology

Initially I worked with Moment.js to set a functional clock in the header provided, and added
some simple styling elements in CSS. Afterwords I used Bootstrap to create rows and columns for
each hour of the working day, aas well as time markers and a custom save button that I found
online.

The structural elements in place, I used Jquery and Moment.js to create a function that applied
or removed CSS classes according to the current time. Following that, I used Jquery and some rw
Javascript to add functionality to the save buttons, allowing the user to save their input to
local storage. Finally I added a "Clear" button, allowing the user to wipe the slate at the end
of the day, or at their discretion.

URL of deployed application: https://jevenden.github.io/Day-Planner-Challenge/

```


```
![screenshot](https://user-images.githubusercontent.com/102879070/171288842-60fcf0c2-8a40-413d-8595-26cdc8e92932.jpg)

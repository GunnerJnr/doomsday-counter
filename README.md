# DOOMSDAY COUNTER

A simple countdown timer using [FlipClock.js](http://flipclockjs.com/).

The counter can be viewed [here](http://gunnerjnr.uk/doomsday/).

## KNOWN BUGS

1. Not yet mobile responsive
2. By the time you view this the counter may have already reached the end of its life and just display zero, a simple fix would be to open your developer changes and change the values in countdown.js for `countdownDate` and `breakdownDate`.

### example

```js
// Set the date we're counting down to
var countdownDate = new Date("Dec 25, 2018 09:00:00"); //Month Days, Year HH:MM:SS
var breakdownDate = new Date("January 1, 2019 09:30:00"); //Month Days, Year HH:MM:SS
```
var countdownClock;
var breakdownClock;
// Set the date we're counting down to
var countdownDate = new Date("June 7, 2018 11:00:00"); //Month Days, Year HH:MM:SS
var breakdownDate = new Date("June 7, 2018 17:30:00"); //Month Days, Year HH:MM:SS
// Get todays date and time
var now = new Date();
// Find the distance between now an the count down date
var countdownDiff = (countdownDate.getTime() / 1000) - (now.getTime() / 1000);
var breakdownDiff = (breakdownDate.getTime() / 1000) - (now.getTime() / 1000);

$(document).ready(function () {

	// Instantiate a counter
	countdownClock = new FlipClock($('.countdown-clock'), countdownDiff, {
		clockFace: 'DailyCounter',
		autoStart: true,
		countdown: true
	});

	// Instantiate a counter
	breakdownClock = new FlipClock($('.breakdown-clock'), breakdownDiff, {
		clockFace: 'DailyCounter',
		autoStart: true,
		countdown: true
	});

});
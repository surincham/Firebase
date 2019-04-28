var name = $("#trainName-input").val().trim();
var destination = $("#destination-input").val().trim();
var fTrain = $("#firstTrain-input").val().trim();
var freq = $("#frequency-input").val().trim();


$(document).on("click", ".btn", function () {
    console.log(name);
    console.log(destination);
    console.log(fTrain);
    console.log(freq);
})


// Assumptions
var tFrequency = (freq);

// Time is 3:30 AM
var firstTime = (fTrain);

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


var name = $("#trainName-input").val().trim();
var destination = $("#destination-input").val().trim();
var fTrain = $("#firstTrain-input").val().trim();
var freq = $("#frequency-input").val().trim();


$("#name-display").text(name);
$("#destination-display").text(destination);
$("#fTrain-display").text(fTrain);
$("#freq-display").text(freq);

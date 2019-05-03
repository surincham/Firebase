var config = {
    apiKey: "AIzaSyBALn-_zL6hLVntCUJFxHj_4tqKo08hAVU",
    authDomain: "train-schedule-d5c77.firebaseapp.com",
    databaseURL: "https://train-schedule-d5c77.firebaseio.com",
    projectId: "train-schedule-d5c77",
    storageBucket: "train-schedule-d5c77.appspot.com",
    messagingSenderId: "139954342223"
  };
  firebase.initializeApp(config);



$(document).on("click", ".btn", function () {
  event.preventDefault()

  var name = $("#trainName").val().trim();
  var destination = $("#destination").val().trim();
  var fTrain = $("#firstTrain").val().trim();
  var freq = $("#frequency").val().trim();

    console.log(name);
    console.log(destination);
    console.log(fTrain);
    console.log(freq);

// Assumptions
var tFrequency = freq;

// Time is 3:30 AM
var firstTime = fTrain;
console.log(typeof tFrequency);
console.log(typeof firstTime);

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " , moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " , diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " , tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " , moment(nextTrain).format("hh:mm"));
$("#name-display").text(name);
$("#destination-display").text(destination);
$("#fTrain-display").text(fTrain);
$("#freq-display").text(freq);
});



//Firebase Key and Storage
var firebaseConfig = {
    apiKey: "AIzaSyCzaCwjV6N4NHrN7R4qzCwlhAIe6EnOPYA",
    authDomain: "school-62d7c.firebaseapp.com",
    databaseURL: "https://school-62d7c.firebaseio.com",
    projectId: "school-62d7c",
    storageBucket: "school-62d7c.appspot.com",
    messagingSenderId: "797263718320",
    appId: "1:797263718320:web:cbae296ab8b467d7499875",
    measurementId: "G-13NHKFZ33X"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//submitting new train info
$("#addTrain").on("click", function (event) {
    event.preventDefault();

    //getting user's input
    var thetrain = $("#train").val().trim();
    var thedestination = $("#destination").val().trim();
    var thefirst = $("#first").val().trim();
    var thefrequency = $("#frequency").val().trim();

    //temp storage
    var fillTrain = {
        train: thetrain,
        destination: thedestination,
        first: thefirst,
        frequency: thefrequency,
    };
    //allowing train data to appear
    database.ref().push(fillTrain);

    //console.log("if it added to firebase");
    //console.log(fillTrain.train);
    //console.log(fillTrain.destination);
    //console.log(fillTrain.first);
    //console.log(fillTrain.frequency)

    //alert("train added")

    //clear input
    $("#train").val("");
    $("#destination").val("");
    $("#first").val("");
    $("#frequency").val("");

});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    thetrain = childSnapshot.val().train;
    thedestination = childSnapshot.val().destination;
    thefirst = childSnapshot.val().first;
    thefrequency = childSnapshot.val().frequency;

    //log military time for first train
    // var trainArr = thefirst.split(":");
    // var militaryHour = trainArr[0];
    // var militaryMin = trainArr[1];

    // var trainTime = moment().hours(militaryHour).minutes(militaryMin);

    // console.log(trainTime);

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(thefirst, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime, "minutes");

    // Time apart (remainder)
    var tRemainder = diffTime % thefrequency;
    console.log("tRemainder: " + tRemainder);

    var tMinutesTillTrain = thefrequency - tRemainder;
    console.log(tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    var newRow = $("<tr>");

    // The train
    var trainCol = $("<td>");
    trainCol.text(thetrain);

    newRow.append(trainCol);

    // The dest
    var destCol = $("<td>");
    destCol.text(thedestination);

    newRow.append(destCol);

    // The first
    var firstCol = $("<td>");
    firstCol.text(thefirst);

    newRow.append(firstCol);

    // Next train
    var minutesAwayCol = $("<td>");
    minutesAwayCol.text(moment(nextTrain).format("hh:mm","A"));

    newRow.append(minutesAwayCol);


    // The frequency
    var freqCol = $("<td>");
    freqCol.text(tMinutesTillTrain);

    newRow.append(freqCol);

    $("tbody").append(newRow);
});

//function newFunction(event) {
//    console.log(event);
//}
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

var trainInfo = firebase.database();

//submitting new train info
$("#add-train-info").on("click", function(event){
    event.preventDefault();

//getting user's input
var trainName = $("#trainInput").val().trim();
var trainDestination = $("#destinationInput").val().trim();
var trainFirstTrain = $("#firstInput");
var trainFrequency = moment($("#frequencyInput").val().trim(), "00:00").format("hh:mm");

//temp storage
var fillTrain = {
    trainName= trainInput,
    trainDestination= destinationInput,
    trainFirstTrain = firstInput,
    trainFrequency= frequencyInput,
};
//allowing train data to appear
database.ref().push(fillTrain);

console.log(fillTrain.trainName);
console.log(fillTrain.trainDestination);
console.log(fillTrain.trainFirstTrain);
console.log(fillTrain.trainfrequency)







});
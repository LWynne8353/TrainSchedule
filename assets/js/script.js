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
$("#addtrain").on("click", function(event){
    event.preventDefault();

//getting user's input
var name = $("#train").val().trim();
var destination = $("#destination").val().trim();
var firstTrain = $("#first");
var frequency = moment($("#frequency").val().trim(), "00:00").format("hh:mm");

//temp storage
var fillTrain = {
    name= trainInput,
    destination= destinationInput,
    firstTrain = firstInput,
    frequency= frequencyInput,
};
//allowing train data to appear
trainInfo.ref().push(fillTrain);

console.log("if it added to firebase")
console.log(fillTrain.name);
console.log(fillTrain.destination);
console.log(fillTrain.firstTrain);
console.log(fillTrain.frequency);

alert("train added")

//clear input
$("train").val("");
$("destination").val("");
$("first").val("");
$("frequency").val("");

});

database.ref().on("child_added"), function(childSnapshot){

}
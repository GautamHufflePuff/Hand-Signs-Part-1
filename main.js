Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 90,
});
Camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      '<img id="captured_image" src="' + data_uri + '">';
  });
}
console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/DhkJ4MfQQ/model.json",
  modelloaded
);

function modelloaded() {
  console.log("Model Loaded Succesfully, bud!");
}
function speak() {
  var synth = window.speechSynthesis;
  speak_data_1 = "The First Prediction is " + prediction_1;
  speak_data_2 = "And The Second Prediction is " + prediction_2;
  var Utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(Utterthis);
}

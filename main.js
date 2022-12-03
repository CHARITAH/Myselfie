var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    
    if(Content =="take my selfie")
    {
        console.log("taking selfie --- ");
        speak();
    }
}

function speak() {
var synth = window.speechSynthesis;
speechData = "Taking your selfie in 5 seconds.  5    4   3   2   1";
var utterThis = new SpeechSynthesisUtterance(speechData);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    takeSnapshot();
    save();    
},5000);
}
Webcam.set({
height: 250,
width: 360,
image_format:'png',
 png_quality: 90
});
camera = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "self" src="'+data_uri+'"/>';
    });
}

function save(){
 link = document.getElementById("link");
 image = document.getElementById("self").src;
link.href = image;
link.click();
}
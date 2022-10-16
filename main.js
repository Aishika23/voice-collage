var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    document.getElementById("textbox").innerHTML = " "; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content = "take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "5";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_selfie(); 
        
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementsByClassName("result1").innerHTML = '<img id="r1" src="'+data_uri+'"/>';
        document.getElementsByClassName("result2").innerHTML = '<img id="r2" src="'+data_uri+'"/>';
        document.getElementsByClassName("result3").innerHTML = '<img id="r3" src="'+data_uri+'"/>';
    });
}

function save()
{
  link = document.getElementById("link");
  image1 = document.getElementById("r1").src;
  link.href = image1, image2;
  link.click();
}

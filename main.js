//https://teachablemachine.withgoogle.com/models/[...]
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})

camera = document.getElementById("camera")
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'" />'
    }); 
}

console.log('ml5version', ml5.version);
//https://teachablemachine.withgoogle.com/models/33IAKW59u/
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/33IAKW59u/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model is Loaded');
}
hand_gestures_project_model_link.txt
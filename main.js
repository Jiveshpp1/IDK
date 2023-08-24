function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5fQSwd1yA/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r = Math.floor(Math.random()*255) + 1;
        random_g = Math.floor(Math.random()*255) + 1;
        random_b = Math.floor(Math.random()*255) + 1;
        document.getElementById('resultl').innerHTML = 'I can hear -'+ results[0].label
        document.getElementById('resultc').innerHTML = 'Acuracy -'+ (results[0].confidence * 100).toFixed(2) +"%";
        document.getElementById("resultl").style.color ="rgb("+random_r+","+random_g+","+random_b+")";
        img = document.getElementById("a1");
        img1 = document.getElementById("a2");
        img2 = document.getElementById("a3");
        img3 = document.getElementById("a4");

        if(results[0].label == "Clap"){
            img.src = "aliens-01.gif";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }
        else if(results[0].label == "Bang"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.gif";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }
        else if(results[0].label == "Snap"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.gif";
            img3.src = "aliens-04.png";
        }


    }
}
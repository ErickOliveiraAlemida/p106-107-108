function startClassification(){
  navigator.mediaDevices.getUserMedia({audio: true})
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ROob3-8BY/model.json', modelReady);
  }
  function modelReady(){
    classifier.classify(gotResults)
  }
  function gotResults(erros,results){
    if(erros){
      console.log(erros)
    }else{
      console.log(results)
      var numberR = Math.floor(Math.random()*255)+1
      var numberG = Math.floor(Math.random()*255)+1
      var numberB = Math.floor(Math.random()*255)+1
      //console.log(numberR,numberB,numberG)
      document.getElementById("result_label").innerHTML = "Posso ouvir - " + results[0].label
      document.getElementById("result_confidence").innerHTML = "Precisão - " +(results[0].confidence*100).toFixed(2) + "%"
      document.getElementById("result_label").style.color = "rgb("+numberR+","+numberG+","+numberB+")"
      document.getElementById("result_confidence").style.color = "rgb("+numberR+","+numberG+","+numberB+")"
      var img = document.getElementById("orelha")
      if (results[0].label == "miado") {
        img.src = "th.jpg"
      }else if (results[0].label == "latido"){
        img.src = "th (1).jpg"
      }else {
        img.src = "th (2).jpg"
      }
    }
  }
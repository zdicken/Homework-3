var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var text = document.getElementById("yeah");

for(var i = 0; i < animals.length; i++) {
  if(animals[i] == "dog") {
       text.innerHTML += "borf borf<br>";
  } else if(animals[i] == "cat") {
       text.innerHTML += "I am a cat<br>";
  } else {
       text.innerHTML += "I'm an animal<br>";
  }
}
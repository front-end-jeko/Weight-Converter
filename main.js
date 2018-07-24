document.getElementById("output").style.display = "none";
document.getElementById("lbsInput").addEventListener("input", function(e){
document.getElementById("output").style.display = "block";
  
  var lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.001;
  document.getElementById("kgOutput").innerHTML = lbs / 1;
  document.getElementById("tonneutput").innerHTML = lbs / 1000;
})
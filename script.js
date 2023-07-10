document.getElementById("incrBtn").addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("numDisplay").innerHTML = xhr.responseText;
    }
  };
  xhr.open("POST", "save.php", true);
  xhr.send();
});

var incrBtn = document.getElementById("incrBtn");
var numDisplay = document.getElementById("numDisplay");

var number = 0;

incrBtn.addEventListener("click", function() {
  number++;

  numDisplay.textContent = number;
});

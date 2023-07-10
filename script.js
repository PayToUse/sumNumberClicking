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

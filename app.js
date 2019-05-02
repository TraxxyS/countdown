// Starts the counter by clicking on Start
function StartCountdown() {

  var time = document.getElementById('Input').value;
  var timeleft = time;
  var downloadTimer = setInterval(function() {
    document.getElementById("countdown").innerHTML = timeleft;
    timeleft -= 1;
    if(timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished"
    }
  }, 1000);
}

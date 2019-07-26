$(document).ready(function(){

    //Start game when user clicks start button
    







//Timer code
let seconds = 30;
function countdown() {
  seconds--;
  console.log(seconds);
  $(".countdownArea").text(`Time Left: ${seconds}`);
  if (seconds === 0) {
    clearTimeout(timer);
    return false;
  }
  setTimeout(countdown, 1000)
}
const timer = setTimeout(countdown, 1000);
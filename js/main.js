//console.log("Hello, World")
let seconds = document.getElementById('seconds');
let milliseconds = document.getElementById('milliseconds');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let sec = 0;
let millisec = 0;
let timeInterval; 
// function for set timer
const timer = () => {
  millisec++;
//  checking the condition if  millisec is less than 9
  if(millisec < 9) {
    milliseconds.innerHTML = "0" + millisec;

 }

  if(millisec > 9) {
    milliseconds.innerHTML = millisec;

 }

  if(millisec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    millisec = 0;
    milliseconds.innerHTML = "0" + 0;

 }
  if(sec > 9) {

    seconds.innerHTML = sec;

 }
}
// event listeners for start stop and reset the timer
//  start
start.addEventListener('click',() => {
        timeInterval = setInterval(timer, 10);
    // console.log(start)

    })
// stop
stop.addEventListener('click', () => {
    clearInterval(timeInterval)
 })
// reset
reset.addEventListener('click', () => {
    timeInterval = setInterval(timeInterval)
    sec = "00";
    millisec = "00";
    seconds.innerHTML = sec;
    milliseconds.innerHTML = millisec;
 })



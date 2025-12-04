const clock = document.querySelector('#clock');

// setInterval(function () {
//   let date = new Date();
//   //console.log(date.toLocaleTimeString());
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);


//second way
// function updateClock() {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }
// setInterval(updateClock, 1000);
// updateClock();

//third way

function animateClock() {
  clock.textContent = new Date().toLocaleTimeString();
  requestAnimationFrame(animateClock);
}

animateClock();
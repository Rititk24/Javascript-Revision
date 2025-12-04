const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>Please Enter valid value${height}</span>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>Please Enter valid value${weight}</span>`;
  } else {
    const bmicalculate = (weight / ((height * height) / 10000)).toFixed();
    let message = '';
    if (bmicalculate < 18.6) {
      message = 'You are underweight';
    } else if (bmicalculate >= 18.6 && bmicalculate <= 24.6) {
      message = 'Your weight is normal';
    } else {
      message = 'You are overweight';
    }
    result.innerHTML = `<span>Your Bmi : ${bmicalculate} -  ${message}</span>`;
  }
});

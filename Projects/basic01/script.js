const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
//console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'red') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'green') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'black') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // else{
    //   alert("Please click button")
    // }

    switch (e.target.id) {
      case 'blue':
        //console.log('blue clicked');
        body.style.backgroundColor = 'blue';
        break;

      case 'red':
        //console.log('blue clicked');
        body.style.backgroundColor = 'red';
        break;
      case 'green':
        //console.log('blue clicked');
        body.style.backgroundColor = 'green';
        break;
      case 'yellow':
        //console.log('blue clicked');
        body.style.backgroundColor = 'yellow';
        break;
      case 'black':
        //console.log('blue clicked');
        body.style.backgroundColor = 'black';
        break;

      default:
        break;
    }
  });
});
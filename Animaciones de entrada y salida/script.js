// para java se hace el llamado con id

const $hideButton = document.getElementById('hide-modal');
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');

// escuchar los eventos - y hacer una funcion - resivir un evento
// y saber si el click ocurrió con console.log (event);

$hideButton.addEventListener('click', (event) => {
  // console.log (event);
  $modal.style.animation = 'modalOut .8s forwards';
  $overlay.classList.remove('active');
});

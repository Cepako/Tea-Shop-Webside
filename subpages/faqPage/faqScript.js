const questions = [...document.querySelectorAll('.question')];
const arrowsDown = [...document.querySelectorAll('.fa-chevron-down')];
const arrowsUp = [...document.querySelectorAll('.fa-chevron-up')];

const addActive = function (i) {
  for (let j = 0; j < questions.length; j++) {
    if (j !== i) {
      arrowsDown[j].style.display = 'block';
      arrowsUp[j].style.display = 'none';
      questions[j].classList.remove('active');
    } else if (j === i) {
      questions[j].classList.toggle('active');
      if (questions[j].classList.contains('active')) {
        arrowsDown[j].style.display = 'none';
        arrowsUp[j].style.display = 'block';
      } else {
        arrowsDown[j].style.display = 'block';
        arrowsUp[j].style.display = 'none';
      }
    }
  }
};

questions.forEach((arrowDown, i) => {
  arrowDown.addEventListener('click', addActive.bind(null, i));
});

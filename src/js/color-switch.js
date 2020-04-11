const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStart);
stopBtnRef.addEventListener('click', onStop);

stopBtnRef.setAttribute('disabled', 'true');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const index = () => randomIntegerFromInterval(0, colors.length - 1);

function onStart() {
  startBtnRef.setAttribute('disabled', 'true');
  stopBtnRef.removeAttribute('disabled');
  timerId = setInterval(addBgColor, 1000);
}

function addBgColor() {
  bodyRef.setAttribute('style', `background-color: ${colors[index()]}`);
}

function onStop() {
  stopBtnRef.setAttribute('disabled', 'true');
  startBtnRef.removeAttribute('disabled');
  clearInterval(timerId);
}

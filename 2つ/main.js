window.onload = () => {
  const CANVAS = document.querySelector('canvas');
  const CTX = CANVAS.getContext('2d');

  CTX.fillStyle = 'red';
  CTX.fillRect(100,100,100,100);

  CTX.fillStyle = 'black';
  CTX.fillRect(300,100,100,100);
}
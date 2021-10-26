window.onload = () => {
  const CANVAS = document.querySelector('canvas');
  const CTX = CANVAS.getContext('2d');
  const CTX2 = CANVAS.getContext('2d');

  CTX.fillStyle = 'red';
  CTX.fillRect(100,100,100,100);

  CTX2.fillStyle = 'black';
  CTX2.fillRect(300,100,100,100);
}
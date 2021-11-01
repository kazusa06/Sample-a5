window.onload = () => {
  const CANVAS = document.querySelector('canvas');
  const CTX = CANVAS.getContext('2d');

  let number = 50;      // x座標の変数
  let number2 = 100;    // y座標の変数

  // for (let i = 1; i < 6; i++) {   // これは５こ作ったやつ。あるとわかりやすいと思ったので残しとく。
  //   CTX.fillStyle = 'black';
  //   CTX.fillRect(number,100,50,50);
  //   number += 100;
  // }
  
  for (let i = 1; i < 16; i++) {
    CTX.fillStyle = 'black';
    CTX.fillRect(number,number2,50,50);
    number += 100;
    if (i % 5 === 0) { // 改行
      number = 50;
      number2 += 150;
    }
  }
}
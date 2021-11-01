window.onload = () => {
  const CANVAS = document.querySelector('canvas');
  const CTX = CANVAS.getContext('2d');

  const BLOCK_SIZE = 100;
  CTX.fillStyle  = 'black';

  const BLOCK_Arrey = [ //ブロックの場所
    0,1,3,4,
    5,6,7,8,9,
    10,11,12,13,14,
    16,17,18,
    22,
  ];

  let a = 0; // 配列の要素数を選ぶ変数

  for(let i = 0;i < BLOCK_Arrey.length;i ++) {
    CTX.fillRect((BLOCK_Arrey[a] % 5) * BLOCK_SIZE,Math.trunc(BLOCK_Arrey[a] / 5) * BLOCK_SIZE,BLOCK_SIZE,BLOCK_SIZE); //x軸,y軸,横幅,縦幅
    a++;
  }

}
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
// an object that provides methods and properties for drawing on the canvas.

// 상수를 사용해 캔버스의 크기를 계산한다.
// ctx.canvas.width = COLS * BLOCK_SIZE;
// ctx.canvas.height = ROWS * BLOCK_SIZE;
// 위 코드는 틀린 코드, intex.html, styles.css에 직접 적용해서 고침.

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
// BLOCKSIZE를 1로 생각하기

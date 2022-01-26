const color = document.querySelector('#color-palette');
const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const clearBoardbtn = document.getElementById('clear-board');
let selectColor = "black";

function createPixel(n){
  for(let i=0; i<n; i+=1){
  const pixel = document.createElement('div');
  pixel.className= 'pixel';
  pixelBoard.appendChild(pixel);
  }
}
createPixel(25);

function paintSquad(event){
  selectColor = event.target.id
  const notColor = document.querySelector('.selected');
  notColor.classList.remove('selected');
  event.target.classList.add('selected');
}


function paint(event){
  event.target.style.backgroundColor = selectColor;
}

pixelBoard.addEventListener('click', paint)
colorPalette.addEventListener('click', paintSquad)


function clearBoard(){
  for(let i=0; i < pixelBoard.children.length; i += 1){
    pixelBoard.children[i].style.backgroundColor="white"
  }
}
clearBoardbtn.addEventListener('click', clearBoard)

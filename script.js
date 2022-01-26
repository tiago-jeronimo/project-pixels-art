const color = document.querySelector('#color-palette');
const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const clearBoardbtn = document.getElementById('clear-board');
const inputBoardsIZE = document.getElementById('board-size');
const inputVqv = document.getElementById('generate-board');
let selectColor = "black";

function createPixel(n){ //cria os quadros, adiciona classe a eles e encaixa ele como filho de #pixel-board
  pixelBoard.style.width=n*42+'px';
  pixelBoard.style.height=n*42+'px';
  pixelBoard.innerHTML=''
  for(let i=0; i<n*n; i+=1){ 
  const pixel = document.createElement('div');
  pixel.className= 'pixel';
  pixelBoard.appendChild(pixel);
  }
}
createPixel(5);

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

inputVqv.addEventListener('click', vqv )

function vqv(event) {
 console.log(inputBoardsIZE.value)
 if(inputBoardsIZE.value === ''){
   alert('Board inválido!')
 } else if ( inputBoardsIZE.value <= 5){
  createPixel(5)
 } else if (inputBoardsIZE.value > 5 && inputBoardsIZE.value< 50){
   createPixel(inputBoardsIZE.value)
 } else{
  createPixel(50)
 }
}
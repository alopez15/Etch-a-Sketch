const gridContainer = document.querySelector("#grid-container");
const clearButton = document.querySelector("#clear-button")
const gridCells = document.querySelector('#grid-container').getElementsByTagName('div')
const colorPicker = document.querySelector('#color-picker')
const rainbowBtn = document.querySelector('#rainbow-button')

let size = 32;
let penStatus = false;
let color = 'black'


function setGrid(size) {
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridContainer.append(gridDiv);
  }
}

function clearGrid(){
  let allCells = 0;
  for (let i = 0; i < gridCells.length; i++){
    allCells = i;
    gridCells[allCells].style.backgroundColor = 'white'
  }
}

function activatePen(e) {
  e.target.style.backgroundColor = color;
}

function changeColor(e){
  color = e.target.value
}

function rainbowMode(){
  let red = Math.floor((math.random() * 255))
  let green = Math.floor((math.random() * 255))
  let blue = Math.floor((math.random() * 255))
}

gridContainer.addEventListener("click", (e) => {
  if (penStatus === true) {
    penStatus = false;
    gridContainer.removeEventListener("mouseover", activatePen);
    console.log(penStatus);
  } else {
    penStatus = true;
    gridContainer.addEventListener("mouseover", activatePen);
    console.log(penStatus);
  }
});

colorPicker.addEventListener('change', changeColor)

clearButton.addEventListener('click', e =>{
  clearGrid();
})

window.onload = () => {
  setGrid(size);
};

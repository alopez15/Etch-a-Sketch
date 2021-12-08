const gridContainer = document.querySelector("#grid-container");
const clearButton = document.querySelector("#clear-button");
const gridCells = document
  .querySelector("#grid-container")
  .getElementsByTagName("div");
const colorPicker = document.querySelector("#color-picker");
const rainbowBtn = document.querySelector("#rainbow-button");
const gridSlider = document.querySelector('#grid-slider')
const sliderValue = document.querySelector('#slider-value')

let gridSize = 10;
let penStatus = false;
let rainbowModeStatus = false;
let color = "black";

function setGrid(size) {
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridContainer.append(gridDiv);
  }
}

function clearGrid() {
  for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].style.backgroundColor = "white";
  }
}

function activatePen() {
  if (penStatus === true) {
    penStatus = false;
  } else {
    penStatus = true;
    
  }
}

function blackPen(e){
  if(penStatus === true && rainbowModeStatus === false){
  e.target.style.backgroundColor = color
  }
}

function activateRainbow() {
  if (rainbowModeStatus === true) {
    rainbowModeStatus = false;
  } else {
    rainbowModeStatus = true;
  }
}

function colorPickerValue(e) {
  color = e.target.value;
}

function rainbowMode(e) {
  if (rainbowModeStatus === true && penStatus === true) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor  = `rgb(${red},${green},${blue})`;
  }
}

function displayRange(){
  sliderValue.textContent = gridSlider.value
  gridSize = gridSlider.value
}

function updateGridSize(){
  setGrid(gridSize);
  clearGrid();
  console.log(` grid ${gridSize}`)
}

gridSlider.addEventListener('change', updateGridSize)

gridSlider.addEventListener('input', displayRange)

gridContainer.addEventListener("click", activatePen)

gridContainer.addEventListener("mouseover", rainbowMode)

gridContainer.addEventListener("mouseover", blackPen)

rainbowBtn.addEventListener("click", activateRainbow);

colorPicker.addEventListener("change", colorPickerValue);

clearButton.addEventListener("click", clearGrid);

window.onload = () => {
  setGrid(gridSize);
};

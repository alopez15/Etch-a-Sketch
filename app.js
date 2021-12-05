const gridContainer = document.querySelector("#grid-container");
const clearButton = document.querySelector("#clear-button")
const gridCells = document.querySelector('#grid-container').getElementsByTagName('div')

let size = 10;
let penStatus = false;

function setGrid(size) {
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridContainer.append(gridDiv);
  }
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

function activatePen(div) {
  div.target.style.backgroundColor = "black";
}

clearButton.addEventListener('click', e =>{
  clearGrid();
})

function clearGrid(){
  let allCells = 0;
  for (let i = 0; i < gridCells.length; i++){
    allCells = i;
    gridCells[allCells].style.backgroundColor = 'white'
  }
}

window.onload = () => {
  setGrid(size);
};

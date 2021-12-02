const gridContainer = document.querySelector('#gridContainer')

gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)'
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)'


for (let i = 0; i < 32 * 32; i++){

    const gridDiv = document.createElement('div')
    gridContainer.append(gridDiv)    

}


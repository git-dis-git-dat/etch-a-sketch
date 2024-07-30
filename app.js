const container = document.querySelector('#container');

// test 
// container.textContent = 'rudy'

function addTile(){
    //create a new div
    //add class for styling
    //add it to container

    const tile = document.createElement('div');
    tile.className = 'tile'
    tile.textContent = 'rudy'
    container.appendChild(tile);

    
}

addTile();
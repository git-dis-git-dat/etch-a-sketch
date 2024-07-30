const container = document.querySelector('#container');

function addTile(){
    const tile = document.createElement('div');
    tile.className = 'tile'
    tile.textContent = 'rudy'
    container.appendChild(tile);
}

// addTile();

function addTiles(number = 2){
    const totalTiles = number *= number;

    for(i=0; i < totalTiles; i++){
        const tile = document.createElement('div');
        tile.className = 'tile'
        container.appendChild(tile);
    }  
}

addTiles();
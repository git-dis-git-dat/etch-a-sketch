const container = document.querySelector('#container');

function addTile(){
    const tile = document.createElement('div');
    tile.className = 'tile'
    tile.textContent = 'rudy'
    container.appendChild(tile);
}

// addTile();

function addTiles(number = 16){
    const dimension = 100 / number + '%';
    const totalTiles = number *= number;
    
    for(i=0; i < totalTiles; i++){
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.width = dimension;
        tile.style.height = dimension;
        container.appendChild(tile);
    }  
}

addTiles();
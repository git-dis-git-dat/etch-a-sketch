const container = document.querySelector('#container');

// function addTile(){
//     const tile = document.createElement('div');
//     tile.className = 'tile'
//     tile.textContent = 'rudy'
//     container.appendChild(tile);
// }

// addTile();

function addTiles(number = 16){
    // clears any children on this element if they exist
    container.textContent = '';
    // if(!Number.isInteger(number)){return alert('You must enter a whole number.')}

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

function draw(){
    const tile = document.querySelectorAll('.tile');
    tile.forEach(tile => {
        tile.addEventListener('mouseover', ()=>{
            tile.style.backgroundColor = 'black';
        });
    });
}

draw();
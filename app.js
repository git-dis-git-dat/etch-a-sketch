const container = document.querySelector('#container');
const button = document.querySelector('#draw-btn');
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
    // if(!Number.isInteger(number) || number < 1){return alert('You must enter a whole number greater than 0.')}

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

// addTiles();

function draw(){
    const tile = document.querySelectorAll('.tile');
    tile.forEach(tile => {
        tile.addEventListener('mouseover', ()=>{
            tile.style.backgroundColor = 'black';
        });
    });
}

// draw();

button.addEventListener('click',()=>{
    let number = prompt('Input a value 1-100');
    number = parseInt(number);
    addTiles(number);
    draw();
})

addTiles();
draw();
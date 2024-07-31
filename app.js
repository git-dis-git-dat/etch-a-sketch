const container = document.querySelector('#container');
const button = document.querySelector('#draw-btn');

function addTiles(number = 16){
    // clears any children on this element if they exist
    container.textContent = '';

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

function draw(){
    const tile = document.querySelectorAll('.tile');
    tile.forEach(tile => {
        tile.addEventListener('mouseover', ()=>{
            tile.style.backgroundColor = 'black';
        });
    });
}

button.addEventListener('click',()=>{
    let number = prompt('Input a value 1-100', 16);
    number = parseInt(number);
    if(isNaN(number) || number < 1 || number > 100){return alert('You must enter a whole number greater than 0 and 100 or less.')}
    addTiles(number);
    draw();
})

addTiles();
draw();
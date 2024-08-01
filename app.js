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

function makeRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function draw(){
    const tile = document.querySelectorAll('.tile');
    tile.forEach(tile => {
        tile.addEventListener('mouseover', ()=>{
            //tile.style.backgroundColor = 'black';
            tile.style.backgroundColor = makeRandomColor();
            tile.style.opacity = Number(tile.style.opacity) + 0.1
            
        });
    });
}

button.addEventListener('click',()=>{
    let number = prompt('How big is your grid?', 16);
    number = parseInt(number);
    if(isNaN(number) || number < 1 || number > 100){return alert('You must enter a whole number between 1-100.')}
    addTiles(number);
    draw();
})

addTiles();
draw();
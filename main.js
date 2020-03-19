let grid = document.getElementById('grid-container');
let grey = document.getElementById('grey');
let color = document.getElementById('color');
let erase = document.getElementById('erase');
let reset = document.getElementById('reset');

function random256() {
    return Math.floor(Math.random() * 256);
}

function newGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.classList.add("cell");
            cell.addEventListener('mouseenter', () => {
                let greyScale = random256();
                cell.style.backgroundColor = `rgb(${greyScale}, ${greyScale}, ${greyScale})`;
                cell.style.transition = '0.3s';
            });
            grid.appendChild(cell);
        }
    }
}


newGrid(16);
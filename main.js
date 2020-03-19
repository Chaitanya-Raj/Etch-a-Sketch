let grid = document.getElementById('grid-container');
let grey = document.getElementById('grey');
let color = document.getElementById('color');
let erase = document.getElementById('erase');
let reset = document.getElementById('reset');

function random256() {
    return Math.floor(Math.random() * 256);
}

function defaultGrid(size) {
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

function paintGrey() {
    let cells = [...document.querySelectorAll(".cells")];
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            let greyScale = random256();
            cell.style.backgroundColor = `rgb(${greyScale}, ${greyScale}, ${greyScale})`;
            cell.style.transition = '0.3s';
        });
    });
}

function paintColor() {
    let cells = [...document.querySelectorAll(".cells")];
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
            cell.style.transition = '0.3s';
        });
    });
}

function eraseCells() {
    let cells = [...document.querySelectorAll(".cells")];
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = white;
        });
    });
}

function removeCells() {
    let cells = [...document.querySelectorAll(".cells")];
    cells.forEach(cell => {
        cell.remove();
    });
}

function resetAll() {
    removeGrid();
    let size;
    do {
        size = prompt('Select a grid size between 2 and 100', '');
    } while (size < 2 || size > 100);
    newGrid(size);
    defaultGrid(size);
}

function newGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// grey.addEventListener('click', () => {
//     paintGrey();
// });

// color.addEventListener('click', () => {
//     paintColor();
// });

// erase.addEventListener('click', () => {
//     eraseCells();
// });

// reset.addEventListener('click', () => {
//     resetAll();
// });

defaultGrid(16);
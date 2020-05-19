let grid = document.getElementById("grid-container");
let grey = document.getElementById("grey");
let color = document.getElementById("color");
let erase = document.getElementById("erase");
let reset = document.getElementById("reset");

function random256() {
  return Math.floor(Math.random() * 256);
}

function newGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
}

function removeGrid() {
  let cells = [...document.querySelectorAll(".cell")];
  cells.forEach((cell) => {
    grid.removeChild(cell);
  });
}

function resetAll() {
  removeGrid();
  let size;
  do {
    size = prompt("Select a grid size between 2 and 100", "");
  } while (size < 2 || size > 100);
  newGrid(size);
}

reset.addEventListener("click", () => {
  resetAll();
});

function paintGrey() {
  let cells = [...document.querySelectorAll(".cell")];
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      let greyScale = random256();
      cell.style.backgroundColor = `rgb(${greyScale}, ${greyScale}, ${greyScale})`;
      cell.style.transition = "0.3s";
    });
  });
}

grey.addEventListener("click", () => {
  paintGrey();
});

function paintColor() {
  let cells = [...document.querySelectorAll(".cell")];
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
      cell.style.transition = "0.3s";
    });
  });
}

color.addEventListener("click", () => {
  paintColor();
});

function eraseCells() {
  let cells = [...document.querySelectorAll(".cell")];
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "white";
    });
  });
}

erase.addEventListener("click", () => {
  eraseCells();
});

window.addEventListener("load", () => resetAll());

const mainGrid = document.querySelector(".main-grid");
const buttons = document.querySelector(".buttons");
const clearBtn = buttons.querySelector("#clear")
const idBtn = buttons.querySelector("#new")

let gridSize = 16;
let mouseDown = false;
document.body.onmousedown = function(mouseEvent) {
    mouseEvent.preventDefault(); // prevent dragging
    mouseDown = true;
}
document.body.onmouseup = () => { mouseDown = false };

function makeGrid(newGridSize) {
    const newGrid = document.createElement("div");
    newGrid.setAttribute("class", "grid");
    for (let i = 0; i < newGridSize; i++) {
        for (let j = 0; j < newGridSize; j++) {
            const newSquare = document.createElement("div");
            newSquare.setAttribute("class", "square");
            newSquare.setAttribute("x", i + 1);
            newSquare.setAttribute("y", j + 1);
            newSquare.style["grid-column"] = i + 1
            newSquare.style["grid-row"] = j + 1
            newSquare.addEventListener('mouseover', (mouseEvent) => {
                if (!mouseDown) return;
                mouseEvent.currentTarget.style.background = "#000000";
            });
            newGrid.appendChild(newSquare);
        }
    }
    return newGrid;
}


function replaceGrid(newGridSize) {
    let grid = mainGrid.querySelector(".grid");
    if (grid) mainGrid.removeChild(grid);
    let newGrid = makeGrid(newGridSize);
    mainGrid.appendChild(newGrid);
}

clearBtn.onclick = () => replaceGrid(gridSize);

idBtn.onclick = () => {
    let newSize = prompt("Enter the new grid size : ");
    if (!newSize) return;
    gridSize = Math.min(newSize, 64);
    replaceGrid(gridSize);
};

clearBtn.click();
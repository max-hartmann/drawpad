
let mouseDown = false;
let penColor = "#353535";

/* const createGridButton = document.querySelector(".createGridButton"); */
const colorPicker = document.querySelector("#penColor");
const drawingContainer = document.querySelector(".drawingContainer");
const gridSizeInput = document.querySelector("#gridSizeInput");

/* createGridButton.addEventListener("click", getNewGridInput); */
drawingContainer.addEventListener("mousedown", () => mouseDown = true);
drawingContainer.addEventListener("mouseup", () => mouseDown = false);
colorPicker.addEventListener("change", () => penColor = colorPicker.value);
gridSizeInput.addEventListener("change", () => createGrid(gridSizeInput.value));

createGrid(32);


function createGrid(numberOfTiles) {
    /* Remove pre existing drawing area */
    if(document.querySelector("#drawingArea")) document.querySelector("#drawingArea").remove();   
    
    const drawingArea = document.createElement("div");
    drawingArea.setAttribute("id", "drawingArea");
    drawingContainer.append(drawingArea);
      

    for(let i=0; i<numberOfTiles*numberOfTiles;i++) {
        const newTile = document.createElement("div");
        newTile.classList.add("drawingTile");
        newTile.addEventListener('mouseover', drawOnTile);
        newTile.addEventListener('mousedown', drawOnTile);
        drawingArea.append(newTile);
    }

    drawingArea.setAttribute("style", `grid-template-columns: repeat(${numberOfTiles}, 1fr);grid-template-rows: repeat(${numberOfTiles}, 1fr);`)

}

function drawOnTile(e) {
    if(mouseDown || e.type === "mousedown") this.setAttribute("style", `background: ${penColor}`);
}

function getNewGridInput() {
    let input = prompt("How many tiles per row and column do you want?");

    while(!input || input > 100 || input <= 0 || isNaN(input))
    {
        input = prompt("Invalid input. How many tiles per row and column do you want?");
    }

    createGrid(input);
}
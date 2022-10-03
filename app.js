const drawingContainer = document.querySelector(".drawingContainer");
createGrid(32);
let mouseDown = false;

drawingContainer.addEventListener("mousedown", () => mouseDown = true);
drawingContainer.addEventListener("mouseup", () => mouseDown = false);

function createGrid(numberOfTiles) {
    /* Remove pre existing drawing area */
    if(document.querySelector("#drawingArea")) document.querySelector("#drawingArea").remove();   
    
    const drawingArea = document.createElement("div");
    drawingArea.setAttribute("id", "drawingArea");
    drawingContainer.append(drawingArea);
      

    for(let i=0; i<numberOfTiles*numberOfTiles;i++) {
        const newTile = document.createElement("div");
        newTile.classList.add("drawingTile");
        newTile.addEventListener('mouseenter', drawOnTile);
        drawingArea.append(newTile);
    }

    drawingArea.setAttribute("style", `grid-template-columns: repeat(${numberOfTiles}, 1fr);grid-template-rows: repeat(${numberOfTiles}, 1fr);`)

}

function drawOnTile() {
    if(mouseDown)
    this.setAttribute("style", "background: black");
}

const drawingArea = document.querySelector("#drawingArea");
createGrid(16);



function createGrid(numberOfTiles) {
    for(let i=0; i<numberOfTiles*numberOfTiles;i++) {
        const newTile = document.createElement("div");
        newTile.classList.add("drawingTile");
        drawingArea.append(newTile);
        console.log("Tile created");
    }

    drawingArea.setAttribute("style", `grid-template-columns: repeat(${numberOfTiles}, 1fr);grid-template-rows: repeat(${numberOfTiles}, 1fr);`)
}
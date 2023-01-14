const GRID_SIZE = 16;
// generate a 16x16 grid of divs
// and put them inside the 'container' div
const canvasContainer = document.getElementById("canvas-container");
//create 16 x 16 div grid
for (let i = 0; i < GRID_SIZE; i++){
    for (let j = 0; j < GRID_SIZE; j++){
        canvasContainer.appendChild(document.createElement("div"));
    };
};
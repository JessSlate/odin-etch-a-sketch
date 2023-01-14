// generate a 16x16 grid of divs
// and put them inside the 'container' div
const canvasContainer = document.getElementById("canvas-container");
//create 16 x 16 div grid
for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        canvasContainer.appendChild(document.createElement("div"));
    };
};
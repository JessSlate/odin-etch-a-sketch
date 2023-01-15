
function createPixelCanvas(gridSize = 16){
    // generate a grid of divs
    // and put them inside the 'container' div
    const canvasContainer = document.getElementById("canvas-container");

    //clear out any previously generated divs
    canvasContainer.textContent = "";
    
    //create div grid
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            let newDiv = document.createElement("div");
            newDiv.classList.add("pixel");
            canvasContainer.appendChild(newDiv);
        };
    };
};

function fillPixel(e){
    pixel = e.target;

    //ignore non-pixel elements 
    if (pixel.classList != "pixel") return; 

    pixel.classList.add("filled");
};

function reset(){
    let pixelCanvas = document.getElementsByClassName("pixel");
    //remove the 'filled' class
    for (let pixel of pixelCanvas){
        pixel.classList.remove("filled");
    };
    createPixelCanvas(getGridSize());
};

function getGridSize(){
    let userSize = prompt("Hello");
    return userSize;
}

createPixelCanvas();

window.addEventListener('mouseover', fillPixel);
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener('click', reset);
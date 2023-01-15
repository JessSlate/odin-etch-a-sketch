
function createPixelCanvas(gridSize = 16){
    // generate a grid of divs
    // and put them inside the 'container' div
    const canvasContainer = document.getElementById("canvas-container");

    //clear out any previously generated divs
    canvasContainer.textContent = "";

    let pixelSize = (1/gridSize) * 100;
    //deal with irrational numbers / percentages
    pixelSize = (Math.floor(pixelSize * 10))/10;

    //create div grid
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            let newDiv = document.createElement("div");
            newDiv.classList.add("pixel");
            newDiv.style.minWidth = `${pixelSize}%`;
            newDiv.style.minHeight = `${pixelSize}%`;
            canvasContainer.appendChild(newDiv);
        };
    };
};

function fillPixel(e){
    pixel = e.target;
    //ignore non-pixel elements 
    if (pixel.classList != "pixel") return;
    
    pixel.style.backgroundColor = getPaintColor();
};

function getPaintColor(){
    const colorPicker = document.getElementById("color-picker");
    return colorPicker.value;
}

function getGridSize(){
    //only accepts numbers between 1 and 100 inclusive 
    let userSize;
    do{
        userSize = prompt("Enter grid size:\n(Max 100)", 16);
    }while(!parseInt(userSize) || userSize < 1 || userSize > 100);
    createPixelCanvas(Math.round(userSize));
}

//initial load
createPixelCanvas();

window.addEventListener('mouseover', fillPixel);
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener('click', getGridSize);
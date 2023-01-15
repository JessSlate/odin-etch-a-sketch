const GRID_SIZE = 16;
// generate a 16x16 grid of divs
// and put them inside the 'container' div
const canvasContainer = document.getElementById("canvas-container");
//create 16 x 16 div grid
for (let i = 0; i < GRID_SIZE; i++){
    for (let j = 0; j < GRID_SIZE; j++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        canvasContainer.appendChild(newDiv);
    };
};

function fillPixel(e){
    pixel = e.target;

    console.log(pixel);
    if (pixel.classList != "pixel") return;
    pixel.classList.add("filled");
    
}

function reset(){
    let pixelCanvas = document.getElementsByClassName("pixel");
    for (let pixel of pixelCanvas){
        pixel.classList.remove("filled");
    }
}

window.addEventListener('mouseover', fillPixel);
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener('click', reset);
//newDiv.textContent = '\xa0';
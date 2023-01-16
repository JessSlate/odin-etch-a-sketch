
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
            newDiv.style.backgroundColor = "#FFFFFF";
            canvasContainer.appendChild(newDiv);
        };
    };
};

function fillPixel(e){
    pixel = e.target;
    //ignore non-pixel elements 
    if (pixel.classList != "pixel") return;
    
    pixel.style.backgroundColor = getPaintColor(pixel);
};

function getPaintColor(pixel){
    //determine which mode the user has selected:
    const modes = document.getElementsByClassName("modes");
    let selectedMode;
    for(let radioButton of modes){
        if(radioButton.checked) selectedMode = radioButton;
    };
    //get a paint color based on the selected mode
    if(selectedMode.value == "custom"){
        const colorPicker = document.getElementById("color-picker");
        return colorPicker.value;
    } else if(selectedMode.value == "rainbow") {
        return getRandomHexColor();
    } else if(selectedMode.value == "darken"){
        return darkenColor(pixel.style.backgroundColor);
    };
};

function getRandomHexColor(){
    const min = 0,
        max = 255;
    let r = Math.floor(Math.random() * (max - min + 1)),
        g = Math.floor(Math.random() * (max - min + 1)),
        b = Math.floor(Math.random() * (max - min + 1));
    
    return rgbToHexColorCode(r, g, b);
};

function darkenColor(color){
    //string comes in as "rgb(255, 255, 255)"
    let values = color.replace(/[^0-9,]/g,''); //get rid of everything that isn't a number

    values = values.split(',');

    for(let i = 0; i < values.length; i++){
        values[i] = parseInt(values[i]);
        values[i] = Math.floor(values[i] / 1.1);
    };
    return(rgbToHexColorCode(values[0], values[1], values[2]));
}

function getGridSize(){
    //only accepts numbers between 1 and 100 inclusive 
    let userSize;
    do{
        userSize = prompt("Enter grid size:\n(Max 100)", 16);
    }while(!parseInt(userSize) || userSize < 1 || userSize > 100);
    createPixelCanvas(Math.round(userSize));
}


function rgbToHexColorCode(r, g, b){
    let values = [r, g, b];
    for(let i = 0; i < values.length; i++){
        //adds a leading 0 to numbers less than 16
        //without, rgb(15, 15, 15) would return #FFF
        //instead of #0F0F0F
        if(values[i] < 16){
            values[i] = values[i].toString(16);
            values[i] = "0" + values[i];
        } else { 
            values[i] = values[i].toString(16);
        };
    };
    values = values.join('');
    return `#${values}`;
}

//initial load
createPixelCanvas();

window.addEventListener('mouseover', fillPixel);
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener('click', getGridSize);
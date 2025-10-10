// Whenever page loads make the rainbow button have different colors in every letter

rainbow = document.querySelector(".rainbow");
rainbowSplitArray = rainbow.innerText.split("");

let rainbowSplitArrayProcessed = [];
rainbowSplitArray.forEach(function(item){
    randomColor1 = Math.ceil(Math.random()*255);
    randomColor2 = Math.ceil(Math.random()*255);
    randomColor3 = Math.ceil(Math.random()*255);
    item = "<span style='color : rgb(" + randomColor1 + ", " + randomColor2 + ", " + randomColor3 + ")'>" + item + "</span>";
    rainbowSplitArrayProcessed.push(item);
});

rainbowHTMLProcessed = rainbowSplitArrayProcessed.join("");
rainbow.innerHTML = rainbowHTMLProcessed;


gridSelector = document.querySelector("#grid-selector");
sketchContainer = document.querySelector("#sketch-container");

for (let i = 1; i <= 85000; i++){
    if(i === 1){sketchContainer.innerHTML = ""};
    sketchDiv = document.createElement("div");
    sketchDiv.classList.add("sketch-element");
    sketchDiv.classList.add("twobytwo");
    sketchContainer.appendChild(sketchDiv);
}

// Change dynamically the slider grid dimension text whenever the user moves it

gridDimension = document.querySelector("#grid-dimension");
gridSelector.oninput = function(e){
    switch(Number(this.value)){
        case 0:
            gridDimension.innerText = "2x2";
            break;
        case 1:
            gridDimension.innerText = "4x4";
            break;
        case 2:
            gridDimension.innerText = "10x10";
            break;
        case 3:
            gridDimension.innerText = "20x20";
            break;
        default:
            gridDimension.innerText = "Error";
            break;
    }
}

// Change dynamically the grid whenever user moves the slider

gridSelector.addEventListener("change", function(){
    switch(Number(gridSelector.value)){
        case 0:
            for (let i = 1; i <= 85000; i++){
                if(i === 1){sketchContainer.innerHTML = ""};
                sketchDiv = document.createElement("div");
                sketchDiv.classList.add("sketch-element");
                sketchDiv.classList.add("twobytwo");
                sketchContainer.appendChild(sketchDiv);
            }
            break;
        case 1:
            for (let i = 1; i <= 21250; i++){
                if(i === 1){sketchContainer.innerHTML = ""};
                sketchDiv = document.createElement("div");
                sketchDiv.classList.add("sketch-element");
                sketchDiv.classList.add("fourbyfour");
                sketchContainer.appendChild(sketchDiv);
            }
            break;
        case 2:
            for (let i = 1; i <= 3400; i++){
                if(i === 1){sketchContainer.innerHTML = ""};
                sketchDiv = document.createElement("div");
                sketchDiv.classList.add("sketch-element");
                sketchDiv.classList.add("tenbyten");
                sketchContainer.appendChild(sketchDiv);
            }
            break;
        case 3:
            for (let i = 1; i <= 850; i++){
                if(i === 1){sketchContainer.innerHTML = ""};
                sketchDiv = document.createElement("div");
                sketchDiv.classList.add("sketch-element");
                sketchDiv.classList.add("twentybytwenty");
                sketchContainer.appendChild(sketchDiv);
            }
            break;
        default:
            alert("Incorrect slider value, grid will not be made");
            break;
    }
});

// Always position the sketch-container relative to the frame position

document.addEventListener("DOMContentLoaded", repositionSketchContainer());
window.addEventListener("resize", function(){
    repositionSketchContainer();
});

function repositionSketchContainer(){
    sketchContainer = document.querySelector("#sketch-container");
    frameContainer = document.querySelector("#frame-container");

    sketchContainer.style.top = (frameContainer.getBoundingClientRect().top + 122) + "px";
    sketchContainer.style.left = (frameContainer.getBoundingClientRect().left + 118) + "px";
}
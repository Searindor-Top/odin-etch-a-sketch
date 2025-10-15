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

for (let i = 1; i <= 850; i++){
    if(i === 1){sketchContainer.innerHTML = ""};
    sketchDiv = document.createElement("div");
    sketchDiv.classList.add("sketch-element");
    sketchDiv.classList.add("twentybytwenty");
    sketchDiv.classList.add("color-chosen");
    sketchContainer.appendChild(sketchDiv);
}

// Change dynamically the slider grid dimension text whenever the user moves it

gridDimension = document.querySelector("#grid-dimension");
gridSelector.oninput = function(e){
    switch(Number(this.value)){
        case 0:
            gridDimension.innerText = "34x25";
            break;
        case 1:
            gridDimension.innerText = "68x50";
            break;
        case 2:
            gridDimension.innerText = "170x125";
            break;
        case 3:
            gridDimension.innerText = "340x250";
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
            for (let i = 1; i <= 850; i++){
                if(i === 1){sketchContainer.innerHTML = ""};
                sketchDiv = document.createElement("div");
                sketchDiv.classList.add("sketch-element");
                sketchDiv.classList.add("twentybytwenty");
                sketchDiv.classList.add("color-chosen");
                sketchContainer.appendChild(sketchDiv);
            }
            break;
        case 1:
            for (let i = 1; i <= 3400; i++){
                if(i === 1){sketchContainer.innerHTML = ""};
                sketchDiv = document.createElement("div");
                sketchDiv.classList.add("sketch-element");
                sketchDiv.classList.add("tenbyten");
                sketchDiv.classList.add("color-chosen");
                sketchContainer.appendChild(sketchDiv);
            }
            break;
        case 2:
            for (let i = 1; i <= 21250; i++){
                if(i === 1){sketchContainer.innerHTML = ""};
                sketchDiv = document.createElement("div");
                sketchDiv.classList.add("sketch-element");
                sketchDiv.classList.add("fourbyfour");
                sketchDiv.classList.add("color-chosen");
                sketchContainer.appendChild(sketchDiv);
            }
            break;
        case 3:
            for (let i = 1; i <= 85000; i++){
                if(i === 1){sketchContainer.innerHTML = ""};
                sketchDiv = document.createElement("div");
                sketchDiv.classList.add("sketch-element");
                sketchDiv.classList.add("twobytwo");
                sketchDiv.classList.add("color-chosen");
                sketchContainer.appendChild(sketchDiv);
            }
            break;
        default:
            alert("Incorrect slider value, grid will not be made");
            break;
    }
});

// Change color of the hover whenever user changes color

chooseColor = document.querySelector("#choose-color");
chooseColor.addEventListener("input", function(){
    colorChosen = document.createElement("style");
    colorChosen.textContent = ` 
        .color-chosen:hover{
            background-color: ${chooseColor.value};
        }
    `
    colorChosenChecker = document.querySelector("style");
    if(colorChosenChecker !== null){
        document.head.removeChild(colorChosenChecker);
    };
    document.head.appendChild(colorChosen);
});

// When toggled, randomise every color when hovered (rainbow)
/*************************************REVISAR******************************************/

rainbowToggle = document.querySelector("#rainbow-toggle");
rainbowToggle.addEventListener("click", function(){
    rainbowToggle.classList.toggle("button-active");
    sketchElements = document.querySelectorAll(".sketch-element");
    
    sketchElements.forEach(function(element){
        element.addEventListener("mouseover", function(){
            randomRGB = "rgb(" + Math.ceil(Math.random()*255) + ", " + Math.ceil(Math.random()*255) + ", " + + Math.ceil(Math.random()*255) + ")";
            element.style.backgroundColor = randomRGB;
        })
    })   
});

// Toggle border with menu button 

borderToggle = document.querySelector("#border-toggle");
borderToggle.addEventListener("click", function(){
    switch(Number(gridSelector.value)){
        case 0:
        case 1:
            sketchElement = document.querySelectorAll(".sketch-element");
            sketchElement.forEach(element => element.classList.toggle("border"));
            break;
        default:
            alert("Grid elements too small, select another more suitable");
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
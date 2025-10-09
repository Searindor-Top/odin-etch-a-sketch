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

// Always position the sketch-container relative to the frame position

sketchContainer = document.querySelector("#sketch-container");
frameContainer = document.querySelector("#frame-container");

sketchContainer.style.top = (frameContainer.offsetTop + 122) + "px";
sketchContainer.style.left = (frameContainer.offsetLeft + 117) + "px";
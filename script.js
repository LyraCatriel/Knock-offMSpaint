var container = document.getElementById("container");
var isDrawing = false;
var currentColor = "black";
var borderStuff = "";
var clear = false;

function makeRows() {
  container.style.setProperty('--grid-rows', 200);
  container.style.setProperty('--grid-cols', 200);
  for (c = 0; c < (200 * 200); c++) {
    let cell = document.createElement("div");

    // Change to click event
    cell.addEventListener("mousedown", mouseDown) 
    cell.addEventListener("mouseover", mouseOver) 
    cell.addEventListener("mouseup", mouseUp)
    container.appendChild(cell).className = "grid-item";
  };
  
};

// Rename this function if you want (optional)
function mouseDown() { 
  this.style.backgroundColor = currentColor;
  // this.addEventListener("mouseover", mouseOver)  
  isDrawing = true
}

function mouseOver() {
  if(isDrawing){
  this.style.backgroundColor = currentColor;
  
  }

}

function mouseUp() {
  isDrawing = false
}

function changeRed()
{
  currentColor = "red"
  borderStuff = "2px solid black";
}

function changeOrange() {
  currentColor = "orange"
}

function changeYellow() {
  currentColor = "yellow"
}

function changeGreen() {
  currentColor = "green"
}

function changeBlue() {
  currentColor = "blue"
}

function changeViolet() {
  currentColor = "violet"
}

function clearScreen() {
  // console.log("clear")
  var grid_select = document.getElementsByClassName("grid-item");
  console.log(grid_select)
  // const grid_select = document.querySelector("grid-item")
  // containerSelect.style.backgroundColor ="white"
  grid_select.style.backgroundColor = "green"
   // grid_select.style.setProperty('--randomcolor', "blue");
  
}

function erase() {
  currentColor = "white"
}

makeRows()

























// const container = document.getElementById("container");

// function makeRows() {
//   container.style.setProperty('--grid-rows', 55);
//   container.style.setProperty('--grid-cols', 55);
//   for (c = 0; c < (55 * 55); c++) {
//     var cell = document.createElement("div");
    
    
//     // cell.innerText = (c + 1);
//     // cell.addEventListener("mousedown", mouseDown)
//     // cell.addEventListener("mouseup", mouseUp)
//     cell.addEventListener("click", mouseDown) 
//     container.appendChild(cell).className = "grid-item";

//   };
// };
// var isDrawing = true
// function mouseDown() {
//   // this.style.backgroundColor = "red";
//   isDrawing = true
//   return isDrawing
// }

// function mouseUp()
// {
//   // this.style.backgroundColor = "green"
//   isDrawing = false
//   return isDrawing
// }

// function draw()
// {
//   if (isDrawing) {
//     cell.style.backgroundColor = "red";
//   }
// }


// makeRows();
// draw();
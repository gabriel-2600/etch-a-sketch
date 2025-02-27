const container = document.querySelector("#container");

function promptUser() {
  let numOfGrids = prompt("Input numbers 1-100 only");

  if (isNaN(numOfGrids) || numOfGrids == "") {
    alert("Please input an integer!");
    promptUser();
  } else if (numOfGrids === null) {
    return;
  } else if (numOfGrids <= 0 || numOfGrids > 100) {
    alert("Please input between 1-100 only!");
    promptUser();
  } else {
    const rowDivSelect = document.querySelectorAll(".row-div");
    rowDivSelect.forEach((div) => {
      container.removeChild(div);
    });

    convertNumOfGrids = Number(numOfGrids);

    gridGenerator(convertNumOfGrids);
  }
}

const changeGridBtn = document.querySelector(".change-grid-button");
changeGridBtn.addEventListener("click", () => {
  promptUser();
});

const opacityContainer = document.querySelector(".opacity-container");
const opacityBtn = document.querySelector(".opacity-btn");
opacityBtn.addEventListener("click", () => {
  if (opacityBtn.textContent === "Off") {
    opacityBtn.textContent = "On";
  } else if (opacityBtn.textContent === "On") {
    opacityBtn.textContent = "Off";
  }
});

function opacityColor(div) {
  if (div.style.backgroundColor != "black") {
    div.style.backgroundColor = "black";
    div.style.opacity = "0.1";
  }

  let divOpacity = div.style.opacity;
  switch (divOpacity) {
    case "":
      div.style.opacity = "0.1";
      break;
    case "0.1":
      div.style.opacity = "0.2";
      break;
    case "0.2":
      div.style.opacity = "0.3";
      break;
    case "0.3":
      div.style.opacity = "0.4";
      break;
    case "0.4":
      div.style.opacity = "0.5";
      break;
    case "0.5":
      div.style.opacity = "0.6";
      break;
    case "0.6":
      div.style.opacity = "0.7";
      break;
    case "0.7":
      div.style.opacity = "0.8";
      break;
    case "0.8":
      div.style.opacity = "0.9";
      break;
    case "0.9":
      div.style.opacity = "1";
      break;
  }
}

function randomizeColor() {
  let randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

  let hexColor = `#${randomColor}`;

  return hexColor;
}

const randomizeColorBtn = document.querySelector(".randomize-colors-btn");
randomizeColorBtn.addEventListener("click", () => {
  if (randomizeColorBtn.textContent === "Black") {
    randomizeColorBtn.textContent = "Random";
    opacityContainer.style.visibility = "hidden";
    console.log(opacityContainer);
  } else {
    randomizeColorBtn.textContent = "Black";
    opacityContainer.style.visibility = "visible";
  }
});

const eraserBtn = document.querySelector(".eraser-btn");
eraserBtn.addEventListener("click", () => {
  if (eraserBtn.textContent === "Off") {
    eraserBtn.textContent = "On";
  } else {
    eraserBtn.textContent = "Off";
  }
});

function gridGenerator(grids = 16) {
  for (let i = 0; i < grids; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");
    container.appendChild(rowDiv);

    for (let j = 0; j < grids; j++) {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("column-div");
      rowDiv.appendChild(columnDiv);
    }
  }

  const columnDivSelect = document.querySelectorAll(".column-div");

  columnDivSelect.forEach((div) => {
    div.addEventListener("mouseover", () => {
      if (eraserBtn.textContent === "On") {
        div.style.backgroundColor = "";
      } else if (randomizeColorBtn.textContent === "Black") {
        if (opacityBtn.textContent === "On") {
          opacityColor(div);
        } else {
          div.style.opacity = "1";
          div.style.backgroundColor = "black";
        }
      } else {
        div.style.opacity = "1";
        div.style.backgroundColor = randomizeColor();
      }
    });
  });
}

gridGenerator();

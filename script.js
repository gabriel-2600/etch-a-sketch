const container = document.querySelector("#container");

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
}

gridGenerator();
hover();

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
    hover();
  }
}

const changeGridBtn = document.querySelector(".change-grid-button");
changeGridBtn.addEventListener("click", () => {
  promptUser();
});

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
  } else {
    randomizeColorBtn.textContent = "Black";
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

function hover() {
  const columnDivSelect = document.querySelectorAll(".column-div");
  columnDivSelect.forEach((div) => {
    div.addEventListener("mouseover", () => {
      if (eraserBtn.textContent === "On") {
        div.style.backgroundColor = "";
      } else if (randomizeColorBtn.textContent === "Black") {
        div.style.backgroundColor = "black";
      } else {
        div.style.backgroundColor = randomizeColor();
      }
    });
  });
}

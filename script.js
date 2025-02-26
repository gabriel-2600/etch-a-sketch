const container = document.querySelector("#container");

function gridGenerator(grids) {
  console.log(grids);
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

gridGenerator((grids = 16));
draw();

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
    draw();
  }
}

const changeGridBtn = document.querySelector(".change-grid-button");
changeGridBtn.addEventListener("click", () => {
  promptUser();
});

function draw() {
  const columnDivSelect = document.querySelectorAll(".column-div");
  columnDivSelect.forEach((div) => {
    div.addEventListener("mouseover", () => {
      console.log("being hovered fr");
      div.style.backgroundColor = "black";
    });
  });
}

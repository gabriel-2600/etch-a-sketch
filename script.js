const container = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row-div");
  container.appendChild(rowDiv);

  for (let j = 0; j < 100; j++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column-div");
    rowDiv.appendChild(columnDiv);
  }
}

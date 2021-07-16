const table = document.querySelector(".paint-table");
const input = document.getElementById("inputSize");
let numOfDivs = 256;
createDivs();

document.addEventListener("mouseover", (elem) => {
    if (elem.target.matches(".p")) {
      elem.target.style.backgroundColor = "black";
    }});

document.addEventListener("click", eraserOnClick);

document.addEventListener("click", randomOnClick);

document.addEventListener("click", blackOnClick);

function blackOnClick(e) {
  if (e.target.matches(".black")) {
    document.addEventListener("mouseover", (elem) => {
      if (elem.target.matches(".p")) {
        elem.target.style.backgroundColor = "black";
      }
    });
  }
}

function randomOnClick(e) {
    if (e.target.matches(".randomize")) {
      document.addEventListener("mouseover", elem => {
        if (elem.target.matches(".p")) {
          elem.target.style.backgroundColor = randomColor();
        }
      });
    }
  }



function eraserOnClick(e) {
    if (e.target.matches(".erase")) {
      document.addEventListener("mouseover", elem => {
        if (elem.target.matches(".p")) {
          elem.target.style.backgroundColor = 'white';
        }
      });
    }
  }

  function randomColor() {
    let random = Math.floor(Math.random() * 355);
    
    return `hsla(${random}, 100%, 50%, 1)`;
  }


document.addEventListener("click", (e) => {
  if (e.target.matches(".changeSize")) {
    changeBox(getValue());

    input.value = "";
  }
});

function getValue() {
  let value = input.value;
  if (value <= 64 && value > 1) {
    return value;
  } else {
    alert("Choose wisly, man. From 2 to 64. Thank you.");
    return value = 16;
  }
}

function changeBox(size) {
  numOfDivs = size * size;
  table.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  table.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const divs = table.querySelectorAll(".p");
  divs.forEach((element) => {
    element.remove();
  });

  createDivs();
}

function createDivs() {
  for (i = 0; i < numOfDivs; i++) {
    let newDiv = "div" + i;
    newDiv = document.createElement("div");

    newDiv.style.border = "1px solid black";

    newDiv.classList.add("p");

    table.append(newDiv);
  }
}

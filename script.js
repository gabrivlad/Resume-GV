//random color
let culoare = function () {
  return Math.floor(Math.random() * 16777215).toString(16);
};

//selecting  elements
let header = document.querySelector("header");
let workExp = document.getElementById("work");
let education = document.getElementById("education");
let footer = document.querySelector("footer");
//creating events for each elem
const btnHeader = document
  .getElementById("profilebtn")
  .addEventListener(
    "click",
    () => (header.style.backgroundColor = `#${culoare()}`)
  );
let btnWork = document
  .getElementById("workbtn")
  .addEventListener(
    "click",
    () => (workExp.style.backgroundColor = `#${culoare()}`)
  );
let btnEdu = document
  .getElementById("educationbtn")
  .addEventListener(
    "click",
    () => (education.style.backgroundColor = `#${culoare()}`)
  );
let btnFooter = document
  .getElementById("contactbtn")
  .addEventListener(
    "click",
    () => (footer.style.backgroundColor = `#${culoare()}`)
  );

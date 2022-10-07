import { WishList } from "./wishlist.js";

let form = document.getElementById("submitForm");
let carMake = document.getElementById("makeInput");
let carModel = document.getElementById("modelInput");
let carYear = document.getElementById("yearInput");
let pCarMake = document.getElementById("car-make");
let pCarModel = document.getElementById("car-model");
let pCarYear = document.getElementById("car-year");
let removebtn = document.querySelector(".removeBtn");
let wishlistul = document.getElementById("wishlist-ul");

let wishlist = new WishList();

form.addEventListener("submit", addCar);
removebtn.addEventListener("click", removeCar);

function showCarDetails(car) {
  console.log("inside showcardetails");
  pCarMake.textContent = car.make;
  pCarModel.textContent = car.model;
  pCarYear.textContent = car.year;
  removebtn.disabled = false;
  removebtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  console.log("inside updateDomList");
  carMake.value = "";
  carModel.value = "";
  carYear.value = "";
  console.log(carMake.value, carModel.value, carYear.value);
  wishlistul.innerHTML = "";
  for (let i = 0; i < wishlist.list.length; i++) {
    let newList = document.createElement("li");
    newList.textContent = `${wishlist.list[i].make} ${wishlist.list[i].model}`;
    newList.addEventListener("click", () => showCarDetails(wishlist.list[i]));
    wishlistul.appendChild(newList);
  }
}

function addCar(e) {
  e.preventDefault();
  let getCarMakeVal = carMake.value;
  let getCarModelVal = carModel.value;
  let getCarYearVal = carYear.value;
  wishlist.add(getCarMakeVal, getCarModelVal, getCarYearVal);
  updateDOMList();
}

function removeCar() {
  let carId = Number(removebtn.getAttribute("data-carId"));
  wishlist.remove(carId);
  updateDOMList();
  pCarMake.textContent = "";
  pCarModel.textContent = "";
  pCarYear.textContent = "";
  console.log(pCarMake, pCarModel, pCarYear);
  removebtn.disabled = true;
}

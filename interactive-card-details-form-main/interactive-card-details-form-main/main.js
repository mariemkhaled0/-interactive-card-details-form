const inputName = document.querySelector("#cardname");
const inputNumber = document.querySelector("#cardNumber");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const inputCvc = document.querySelector("#cvc");
const confirmBtn = document.querySelector(".confirm-btn");
/*card-info*/
const cardName = document.querySelector(".frontCard-name");
const cardNumber = document.querySelector(".cardNumber-h1");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCvc = document.querySelector(".back-img-cvc");

const blankError = document.querySelectorAll(".error");

const thankPage = document.querySelector(".thank-page");
const right = document.querySelector(".sec2");
const continueBtn = document.querySelector(".continue-btn");

let v1,
  vnum1,
  vnum2,
  vnum3,
  v3,
  v4,
  v5 = false;
console.log(blankError);
inputName.addEventListener("input", function () {
  cardName.textContent = this.value;
  if (!inputName.value) {
    blankError[0].textContent = "Can't be blank";
    inputName.style.border = "1px solid red";
  } else {
    blankError[0].textContent = "";
    inputName.style.border = "1px solid gray";
    v1 = true;
  }
});

function validation(e) {
  let reg = /^[0-9]+$/;
  return reg.test(e);
}

inputNumber.addEventListener("input", function () {
  cardNumber.textContent = this.value;
  if (!inputNumber.value) {
    blankError[1].textContent = "Can't be blank";
    inputNumber.style.border = "1px solid red";
  } else {
    blankError[1].textContent = "";
    inputNumber.style.border = "1px solid gray";
    vnum1 = true;
  }
  const n = inputNumber.value;
  const e = isNaN(n);
  if (e) {
    blankError[1].textContent = "wrong format ,numbers only";
    inputNumber.style.border = "1px solid red";
  } else {
    blankError[1].textContent = "";
    inputNumber.style.border = "1px solid gray";
    vnum2 = true;
  }
});

inputMonth.addEventListener("input", function () {
  cardMonth.textContent = this.value;
  if (!inputMonth.value) {
    blankError[2].textContent = "Can't be blank";
    inputMonth.style.border = "1px solid red";
  } else {
    blankError[2].textContent = "";
    inputMonth.style.border = "1px solid gray";
    v3 = true;
  }
});

inputYear.addEventListener("input", function () {
  cardYear.textContent = this.value;
  if (!inputYear.value) {
    blankError[2].textContent = "Can't be blank";
    inputYear.style.border = "1px solid red";
  } else {
    blankError[2].textContent = "";
    inputYear.style.border = "1px solid gray";
    v4 = true;
  }
});

inputCvc.addEventListener("input", function () {
  cardCvc.textContent = this.value;
  if (!inputCvc.value) {
    blankError[3].textContent = "Can't be blank";
    inputCvc.style.border = "1px solid red";
  } else {
    blankError[3].textContent = "";
    inputCvc.style.border = "1px solid gray";
    v5 = true;
  }
});

confirmBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputNumber.value.length < 16) {
    blankError[1].textContent = " length must be 16";
    vnum3 = false;
  } else vnum3 = true;
  if (v1 && vnum2 && vnum1 && vnum3 && v3 && v4 && v5) {
    {
      thankPage.classList.remove("hidden");
      right.style.display = "none";
    }
  }
});

continueBtn.addEventListener("click", function () {
  thankPage.classList.add("hidden");
  right.style.display = "flex";
});

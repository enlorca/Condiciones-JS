let toggle = false;
console.log("toggle");

function borde() {
  /* Este ejercicio se puede resolver con toggle, pero para efectos del desafio se usará este metodo para demostrar uso de if */
  if (toggle == false) {
    let imgborde = document.querySelector("#imgborde");
    imgborde.style.border = "2px solid red";
    toggle = true;
  } else {
    let imgborde = document.querySelector("#imgborde");
    imgborde.style.border = "0px solid white";
    toggle = false;
  }
}

function stickersCheck() {
  /* Hago un check para valores negativos con un if que lo transforma en un cero */
  let stickerCounter1 = document.querySelector("#stickerCounter1").value;
  if (Number(stickerCounter1) <= 0) {
    stickerCounter1 = 0;
  }
  let stickerCounter2 = document.querySelector("#stickerCounter2").value;
  if (Number(stickerCounter2) <= 0) {
    stickerCounter2 = 0;
  }
  let stickerCounter3 = document.querySelector("#stickerCounter3").value;
  if (Number(stickerCounter3) <= 0) {
    stickerCounter3 = 0;
  }
  let stickerTotal =
    Number(stickerCounter1) + Number(stickerCounter2) + Number(stickerCounter3);
  if (Number(stickerTotal) - 10 >= 0) {
    let cantidad = document.querySelector("#Cantidad");
    cantidad.innerHTML = "Llevas demasiados stickers. Llevas " + stickerTotal;
  } else {
    let cantidad = document.querySelector("#Cantidad");
    cantidad.innerHTML = "Llevas " + stickerTotal + " stickers.";
  }
}

function pwCheck() {
  let pwInput1 = Number(document.querySelector("#pwInput1").value);
  let pwInput2 = Number(document.querySelector("#pwInput2").value);
  let pwInput3 = Number(document.querySelector("#pwInput3").value);
  console.log(pwInput1 + "." + pwInput2 + "." + pwInput3 + ".");
  if (pwInput1 == 9 && pwInput2 == 1 && pwInput3 == 1) {
    let veredicto = document.querySelector("#veredicto");
    veredicto.innerHTML = "Password 1 correcto.";
  } else if (pwInput1 == 7 && pwInput2 == 1 && pwInput3 == 4) {
    let veredicto = document.querySelector("#veredicto");
    veredicto.innerHTML = "Password 2 correcto.";
  } else {
    let veredicto = document.querySelector("#veredicto");
    veredicto.innerHTML = "Password incorrecto";
  }
}

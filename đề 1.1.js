const $numberA = document.getElementById("so-thu-nhat");
const $numberB = document.getElementById("so-thu-hai");
const $sumBtn = document.getElementById("alll");

function soNguyenTo(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

$sumBtn.onclick = function tong() {
  const a = parseInt($numberA.value);
  const b = parseInt($numberB.value);
  let sum = 0;
  for (let i = a; i < b; i++) {
    if (soNguyenTo(i)) {
      sum += i;
    }
  }
  document.getElementById(
    "all"
  ).innerHTML = `Tổng các số nguyên tố từ ${a} đến ${b} là: ${sum}.`;
};

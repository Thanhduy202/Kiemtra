const $starNum = document.getElementById("thong-tin");
const $starBtn = document.getElementById("all");

$starBtn.onclick = function tamGiac() {
  let num = parseInt($starNum.value);
  if (num <= 1 || num >= 10) {
    alert("Số nguyên (1-10)");
  } else {
    let ngoiSao = "";
    for (let i = 1; i <= num; i++) {
      ngoiSao += "*  ".repeat(i) + "<br>";
    }
    document.getElementById("alll").innerHTML = ngoiSao;
  }
};

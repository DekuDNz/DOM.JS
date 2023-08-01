// ex 1
// var elementH1 = document.getElementById("ele-h1");
// var elementH2 = document.querySelector("h1");
// console.log(elementH1);
// console.log(elementH2);
// console.log(elementH1.clientHeight);
// console.log(elementH1.clientWidth);
// console.log(elementH1.id);
// console.log(elementH1.className);
// console.log(elementH1.textContent);
// console.log(elementH1.attributes);

// var contentH1 = elementH1.textContent;
// console.log("nội dung h1 ", contentH1);
// console.log("Chữ cái đầu tiên:,", contentH1.lenght - 1);
// console.log("độ dài chuỗi: ,", contentH1.length);
// console.log("Chữ cái đầu tiên:,", contentH1[contentH1.length - 1]);

// var eleh2 = document.querySelector(".ele-h2");
// console.log("thẻ h2 :", eleh2);

// ex 2

// var valueText = document.getElementById("text-a");
// console.log("lấy giá trị text :", valueText);
// valueText.value = "Viet Long";
// var resultText = valueText.value;
// console.log(resultText);

// var valuePassword = document.getElementById("password-a");

// valuePassword.value = "Password";
// var resultPassword = valuePassword.value;

// console.log(resultPassword);

// ex 3

// set border + background cho div tổng
// set font-size cho label
// set width height , border color cho input

var taikhoan = "viet long";

var taikhoanText = document.getElementById("text-a");
console.log(taikhoanText);

taikhoanText.style.border.color = "red";
taikhoanText.style.width = "500px";
taikhoanText.style.border = "3px solid green";
taikhoanText.value = taikhoan;

var matkhau = "password";

var matkhauText = document.getElementById("password-a");

matkhauText.value = matkhau;

var editDivA = document.querySelector(".divAlla");

editDivA.style.backgroundColor = "red";
editDivA.style.border = "2px solid yellow";
editDivA.style.padding = "5px";
editDivA.style.width = "300px";

// font size cho label

var fontLabel = document.getElementById("font-label");

fontLabel.style.fontSize = "40px";

var styledivB = document.querySelector(".divAllb");

styledivB.classList.add("viet-long");


var slider = document.querySelector("#myinput");
var strong = document.querySelector("strong");
var bold = document.querySelector(".bold");
strong.innerHTML = slider.value


slider.oninput = function() {
strong.innerHTML = this.value;
bold.innerHTML = 1000 - this.value;

}

// var bold = document.querySelector(".bold");
// var strong = document.querySelector("strong");
// var left = document.querySelector(".left");
// var right = document.querySelector(".right");
var slider = document.querySelector("#myinput");
var f = document.querySelector("#myinput").min;
var g = document.querySelector("#myinput").max;
var strong = document.querySelector("strong");
var bold = document.querySelector(".bold");
strong.innerHTML = slider.value
bold.innerHTML = slider.value.max - sliderslider.value.min;

slider.oninput = function() {
strong.innerHTML = this.value;
bold.innerHTML = this.value;

}
// bold.innerHTML = this.value;
// strong.innerHTML = this.value;

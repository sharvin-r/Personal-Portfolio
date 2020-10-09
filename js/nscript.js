$(function () {
    $('[data-toggle="popover"]').popover()
});


var x = document.getElementById('smA');
var y = document.getElementById('smB');
var z = document.getElementById('smC');
var A = document.getElementById('smD');
var B = document.getElementById('smE');
var C = document.getElementById('smF');
var D = document.getElementById('smG');
var E = document.getElementById('smH');
var alpha = document.getElementById('sm1');

alpha.addEventListener("click", function () {

    x.classList.toggle("open");
    y.classList.toggle("open");
    z.classList.toggle("open");
    A.classList.toggle("open");
    B.classList.toggle("open");
    C.classList.toggle("open");
    D.classList.toggle("open");
    E.classList.toggle("open");


    if (alpha.innerHTML === "See More") {
        alpha.innerHTML = "See Less";
    } else {
        alpha.innerHTML = "See More";
    }

});

var beta = document.getElementById('sm2');

beta.addEventListener("click", function () {
    if (beta.innerHTML === "See More") {
        beta.innerHTML = "See Less";
    } else {
        beta.innerHTML = "See More";
    }
});

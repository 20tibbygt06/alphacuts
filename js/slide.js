var slideIndexOne = 1;
showDivsOne(slideIndexOne);

function plusDivsOne(n) {
    showDivsOne(slideIndexOne += n);
}

function showDivsOne(n) {
    var i;
    var x = document.getElementsByClassName("wahlSenior");
    if (n > x.length) {
        slideIndexOne = 1
    }
    if (n < 1) {
        slideIndexOne = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexOne - 1].style.display = "block";
}

var slideIndexTwo = 1;
showDivsTwo(slideIndexTwo);

function plusDivsTwo(n) {
    showDivsTwo(slideIndexTwo += n);
}

function showDivsTwo(n) {
    var i;
    var x = document.getElementsByClassName("wahlMagic");
    if (n > x.length) {
        slideIndexTwo = 1
    }
    if (n < 1) {
        slideIndexTwo = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexTwo - 1].style.display = "block";
}

var slideIndexThree = 1;
showDivsThree(slideIndexThree);

function plusDivsThree(n) {
    showDivsThree(slideIndexThree += n);
}

function showDivsThree(n) {
    var i;
    var x = document.getElementsByClassName("woodComb");
    if (n > x.length) {
        slideIndexThree = 1
    }
    if (n < 1) {
        slideIndexThree = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexThree - 1].style.display = "block";
}

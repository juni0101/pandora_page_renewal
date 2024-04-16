var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("simg");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2500); // 2.5초마다 이미지가 체인지됩니다
}


// let j =0;
// const k =0;
// console.log(j, k);

// k = 5;
// j= 3;

// console.log(j, k);
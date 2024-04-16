$('.sec1_slider').bxSlider({
  auto: true,
  autoControls: false,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 1600,
  controls: false,
});

$('.item_list').bxSlider({
  pager: false,
  slideWidth: 345,
  minSlides: 3, 
  maxSlides: 3,
  controls: true,
  auto: true  
});

document.querySelector(".item_list").style.background = "none";


const  popup = document.querySelector(".popup");
const  popup_X = document.querySelector(".popup_X");

popup_X.addEventListener("click", ()=>{
  popup.style.display = "none";
})


let category = document.querySelectorAll(".category li");
console.log(category);

const ca_name = document.querySelector(".category_sub");
// window.innerWidth
// setInterval(windowWidth, 500);
// function windowWidth(){
//   console.log(window.innerWidth);
// }

window.onresize = function(){tablet()};

function tablet(){
  if(window.innerWidth < 992){
    category[1].style.display = "none";
    category[3].style.display = "none";
    category[4].style.display = "none";
    category[6].style.display = "none";
  }else if(window.innerWidth > 992){
    category[1].style.display = "block";
    category[3].style.display = "block";
    category[4].style.display = "block";
    category[6].style.display = "block";
  }
}

tablet();

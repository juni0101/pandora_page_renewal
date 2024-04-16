// 스크롤 이동 시 헤더 숨기기
// $(window).bind('wheel', function(event){
//   if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
//       // scroll up
//       // console.log("스크롤 위로");
//       document.querySelector('header').style.transform = "translateY(0px)";

//   }
//   else {
//       // scroll down
//       // console.log("스크롤 아래로");
//       document.querySelector('header').style.transform = "translateY(-100px)";
//   }
// });

// header의 변경할 요소 지정
const header = document.querySelector("#header_inner");

// scrollEvent는 스크롤이 움직이는 걸 인식하고
// 스크롤이 top에서부터 70만큼 움직이면 요소에 클래스 추가
function scrollEvent() {
  let scrollVal = document.documentElement.scrollTop;
  document.addEventListener("scroll", function () {
    if (scrollVal > 70) {
      header.classList.add("scroll_down");
      header.classList.remove("header_inner");

      // 스크롤 top으로 부터 얼마나 내려오는지 식별
      // console.log(document.documentElement.scrollTop);
    } else {
      // 스크롤이 Top에서부터 70보다 작을 떄
      header.classList.remove("scroll_down");
      header.classList.add("header_inner");
    }
  });
}
// 스크롤이 움직일때 scrollEvent 실행
function init() {
  document.addEventListener("scroll", scrollEvent);
}
// function init 실행
init();



header.addEventListener('mouseover', ()=>{
  header.classList.add("scroll_down");
  header.classList.remove("header_inner");
})


// login & join / show & hide
const myPage = document.querySelector(".gnb_icon li:nth-of-type(2)");
const myPage_login = document.querySelector(".mypage_login");

myPage.addEventListener("mouseover", () =>{
  myPage_login.style.display = "block";
  myPage_login.addEventListener("mouseout", () =>{
    myPage_login.style.display = "none";
  })
})

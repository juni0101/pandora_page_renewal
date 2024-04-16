// login & join / show & hide
const myPage = document.querySelector(".gnb_icon li:nth-of-type(2)");
const myPage_login = document.querySelector(".mypage_login");

myPage.addEventListener("mouseover", () =>{
  myPage_login.style.display = "block";
  myPage_login.addEventListener("mouseout", () =>{
    myPage_login.style.display = "none";
  })
})

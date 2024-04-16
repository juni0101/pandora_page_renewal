//  요소 지정 메인베너 .mainSlide[]
const banner = document.querySelector(".mainSlide img");
const imgName = "../assets/images/main/";

let arr = [];
arr = [
  "70_project\team\assets\images\main\sec1_img.jpg",
  "70_project\team\assets\images\main\slide_img.png",
  "70_project\team\assets\images\main\slide_img2.png",
];
console.log(arr);

// banner[] 차례대로 지정하여 콘솔로그 출력

function arrList() {
  let i = 0;
  // setInterval(() =>{
  i++;
  if (i >= arr.length) {
    i = 0;
  }
  banner = `url = ${arr[i]}`;
  // console.log(arr[i]);
 
  // }, 2000);
}

arrList();

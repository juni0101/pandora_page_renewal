// 배경을 바꿀요소
//  .sec4_mainBanner
const banner_contents = document.querySelectorAll(".sec4_mainBanner");
// 이벤트를 인식할 요소 side_item[]
const banner_items = document.querySelectorAll(".side_item");
//  클릭되었을 때 .sec4_mainBanner 의 background 변경

// console.log(banner_items);
banner_items[0].addEventListener("click", () =>{
    // console.log("banner_items[0]");
    banner_contents[0].classList.remove('hide');
    banner_contents[1].classList.add('hide');
    banner_contents[2].classList.add('hide');
})
banner_items[1].addEventListener("click", () =>{
    // console.log("banner_items[0]");
    banner_contents[1].classList.remove('hide');
    banner_contents[0].classList.add('hide');
    banner_contents[2].classList.add('hide');
})
banner_items[2].addEventListener("click", () =>{
    // console.log("banner_items[0]");
    banner_contents[2].classList.remove('hide');
    banner_contents[0].classList.add('hide');
    banner_contents[1].classList.add('hide');
})
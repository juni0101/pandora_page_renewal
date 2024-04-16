const prev_btn = document.querySelector(".btn_l");
const next_btn = document.querySelector(".btn_r");

const item_li = document.querySelector(".item_list");

let index = 0;

prev_btn.addEventListener("click", () => {
  if (index === 0) {
    index = 2;
    // prev_btn.style.display = 'none';
  } else {
    index -= 1;
  }
  // console.log(index);
  item_li.style.transform = `translateX(-${1320 * index}px)`;
});

next_btn.addEventListener("click", () => {
  if (index === 2) {
    index = 0;
  } else {
    index += 1;
  }
  item_li.style.transform = `translateX(-${1320 * index}px)`;
  // console.log(index);
});
const prev_btn = document.querySelector(".btn_l");
const next_btn = document.querySelector(".btn_r");

const item_li = document.querySelector(".item_list");
const item = document.querySelectorAll(".item_list li");

let index = 0;
// .item-fadeIn
prev_btn.addEventListener("click", () => {
  if (index === 0) {
    index = 2;
  } else {
    index -= 1;
  }
  // console.log(index);
  btnHide();
  indicator();
  item_li.style.transform = `translateX(-${1320 * index}px)`;
});

next_btn.addEventListener("click", () => {
  if (index === 2) {
    index = 0;
  } else {
    index += 1;
  }
  btnHide();
  indicator();
  item_li.style.transform = `translateX(-${1320 * index}px)`;
  // console.log(index);
});

function btnHide() {
  if (index === 0) {
    prev_btn.style.display = "none";
    next_btn.style.display = "block";
  } else if (index === item.length / 3 - 1) {
    next_btn.style.display = "none";
    prev_btn.style.display = "block";
  } else {
    prev_btn.style.display = "block";
    next_btn.style.display = "block";
  }
}
// console.log(item.length);

// 인디케이터
function indicator() {
  const ind = document.querySelectorAll(".ind");
  for (let m = 0; m < ind.length; m++) {
    ind[m].addEventListener("click", () => {
      // indBar.style.transform = `translateX(${78 * m} + 78px)`;
      for (let n = 0; n < ind.length; n++) {
        ind[n].style.background = "#777";
      }
      ind[index].style.background = "black";
    });
  }
}

// console.log(ind);

btnHide();

// console.log(btn);
const btn = document.querySelectorAll(".btn");
// console.log(btn.length);

/* 
  setTimeout(함수, 시간)
  const 변수 = setInterval(함수, 시간) -> clearInterval(변수)
*/

let timer;
for (let k = 0; k < btn.length; k++) {
  btn[k].addEventListener("click", () => {
    timer = setInterval(opa, 100);
    // let opa = 0;
    // for (let l = 0; l <= 1; l=l+0.01) {
    //   opa += l;
    //   item_li.style.opacity = l;
    //   console.log(item_li.style.opacity);
    // }
    // console.log(opacity);
  });
}

let num = 0;
function opa() {
  num += 0.1;
  item_li.style.opacity = num;
  console.log(num);
  if (num > 1) {
    clearInterval(timer);
    num = 0;
  }
}

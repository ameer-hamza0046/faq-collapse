// const faqBtn = document.querySelector(".faq-btn")
// faqBtn.addEventListener("click", () => {
//     const ans = document.querySelector(".card .ans");
//     ans.classList.toggle("show");
// })

const faqBtnArray = document.querySelectorAll(".faq-btn");
const ansArray = document.querySelectorAll(".card .ans");
const cardArray = document.querySelectorAll(".card");

faqBtnArray.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    ansArray[i].classList.toggle("show");
    cardArray[i].classList.toggle("show");
  });
});

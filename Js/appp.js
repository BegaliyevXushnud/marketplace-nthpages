let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".header__btn-hamburger");
let headerList = document.querySelector(".header__list");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("header__list-show");
})

toggleBtn.addEventListener("click",()=>{
    headerList.classList.toggle("header__list-show");
  })
  
  
  let hrs = document.getElementById("hrs");
  let minut = document.getElementById("minut");
  let second = document.getElementById("second");
  setInterval(()=>{
    let currenTime = new Date();
  hrs.innerHTML = currenTime.getHours();
  minut.innerHTML = currenTime.getMinutes();
  second.innerHTML = currenTime.getSeconds();
  },1000)
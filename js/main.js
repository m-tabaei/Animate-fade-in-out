const cover = document.getElementById("cover")
const btn = document.getElementById("btn")
const modal = document.getElementById("modal")
const close = document.getElementById("close")
function out(){
  modal.classList.remove("animate__fadeInDownBig")
  modal.classList.add("animate__fadeOutUpBig")
  setTimeout(function (){
    modal.style=""
    cover.classList.remove("animate__fadeIn")
    cover.classList.add("animate__fadeOut")
    setTimeout(function (){
      cover.style=""
      modal.classList.remove("animate__fadeInDownBig")
      cover.classList.remove("animate__fadeOut")
    },800)

  },800)
}
btn.addEventListener("click",function (){
  cover.style.display="flex"
  cover.classList.add("animate__fadeIn")
  modal.style.display="block"
  modal.classList.add("animate__fadeInDownBig")
})
close.addEventListener("click",function (){
  out()
})
cover.addEventListener("click",function (e){
  if(e.target===cover){
    out()
  }
})











// function out() {
//   modal.classList.remove("animate__fadeOutUpBig")
//   modal.classList.add("animate__fadeOutUpBig")
//   setTimeout(function () {
//     modal.style = ""
//     cover.classList.remove("animate__fadeIn")
//     cover.classList.add("animate__fadeOut")
//     setTimeout(function () {
//       modal.style = ""
//       cover.classList.remove("animate__fadeOut")
//       modal.classList.remove("animate__fadeOutUpBig")
//     }, 800)
//   }, 800)
// }
//
// btn.addEventListener("click", function () {
//   cover.style.display = "flex"
//   cover.classList.add("animate__fadeIn")
//   modal.style.display = "block"
//   modal.classList.add("animate__fadeInDownBig")
// })
// close.addEventListener("click", function () {
//   out()
// })
// cover.addEventListener("click", function (e) {
//   if (e.target === cover) {
//     out()
//   }
// })

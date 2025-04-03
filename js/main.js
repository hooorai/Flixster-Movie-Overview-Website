// // Swiper
// var swiper = new Swiper(".popular-content", {
//   slidesPerView:1,
//     spaceBetween: 10,
//     autoplay: {
//       delay: 5500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints:{
//       320:{
//         slidesPerView:2,
//         spaceBetween: 10,
//       },
//       510:{
//         slidesPerView:2,
//         spaceBetween: 10,
//       },
//       758:{
//         slidesPerView:3,
//         spaceBetween: 15,
//       },
//       900:{
//         slidesPerView:4,
//         spaceBetween: 20,
//       },
//     }
//   });

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Show video
let playButton = document.querySelector(".trailer");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".close-video");

playButton.onclick = () => {
  video.classList.add("show-video");
  // Auto Play When Click On Button
  myvideo.play();
};

closebtn.onclick = () => {
  video.classList.remove("show-video");
  // Reset the iframe src to stop the video
  myvideo.src = myvideo.src;
};


// const glide1=document.querySelector('#glide1')
// const glide2=document.querySelector('#glide2')
// if(glide1){
// new Glide(glide1,{
// startAt:0,
// preView:3,
// hoverpause:true,
// gap:30,
// autoplay:3000,
// animationDuration:800,
// breakpoints:{
//   996:{
//     preView:3
//   },
//   768:{
//     preview:3
//   },
// },
// }).mount();
// }

// if(glide2){
//     new Glide(glide2,{
//     startAt:0,
//     preView:3,
//     hoverpause:true,
//     gap:30,
//     // autoplay:3000,
//     animationDuration:800,
//     breakpoints:{
//       996:{
//         preView:3
//       },
//       768:{
//         preview:3
//       },
//     },
//     }).mount();
//     }

const responsive={
  0:{
  items:1
  },
  320:{
      items:1
  },
  560:{
      items:2
  },
  960:{
      items:3
  }
}





$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  dots:false,
  nav:true,
  navText:[$('.owl-navagation .owl-nav-prev'),$('.owl-navagation .owl-nav-next')],
  responsive:responsive



  

});
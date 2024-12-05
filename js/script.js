

// Bootstrap Carousel 
// have the hero carousel automatically change slides on the homepage 
// code needs to be refactored to work!
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
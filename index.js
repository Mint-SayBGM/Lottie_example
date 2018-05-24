var animate = lottie.loadAnimation({
  container: document.getElementById("hello"),
  renderer: 'svg',
  autoplay: true,
  loop:true,
  path: 'animation2.json'
})

animate.setSpeed(2);
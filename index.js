var animate = lottie.loadAnimation({
  container: document.getElementById("hello"),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})
animate.playSegments([[0,25], [30,90]],true);
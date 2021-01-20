window.onload = function() {
  console.log("working");
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: '#ffffff',
    responsive: [
      {
      breakpoint: 800,
      options: {
        color: '#ffffff',
        maxParticles: 80,
        connectParticles: false}
      }
    ]
  });
};
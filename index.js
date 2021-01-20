
window.onload = function() {
  console.log("working");
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: '#0077ff',
    responsive: [
      {
      breakpoint: 800,
      options: {
        color: '#0077ff',
        maxParticles: 80,
        connectParticles: false}
      }
    ]
  });
};


// document.getElementsByClassName(".dark-mode").onclick = function() {
//   console.log("working");
//   Particles.init({
//     selector: '.background',
//     connectParticles: true,
    
//     responsive: [
//       {
//       breakpoint: 800,
//       options: {
//         color: '#fff',
//         maxParticles: 80,
//         connectParticles: false}
//       }
//     ]
//   });
// };

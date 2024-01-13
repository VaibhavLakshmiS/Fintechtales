particlesJS('particles-js', {
    particles: {
      number: {
        value: 80, // Adjust to get the desired density
        density: {
          enable: true,
          value_area: 800 // Adjust area for particle density
        }
      },
      color: {
        value: "#ffffff" // Particle color
      },
      shape: {
        type: "circle", // The shape of the particle
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: true, // Randomize opacity for each particle
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true, // Randomize size for each particle
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150, // Adjust the line distance
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2, // The speed of particle movement
        direction: "none", // The direction of particle movement
        random: false,
        straight: false, // Whether the particle should move straight
        out_mode: "out", // What happens when particles reach the edge of the canvas
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab" // Interaction mode on hover (grab, bubble, repulse)
        },
        onclick: {
          enable: true,
          mode: "push" // Interaction mode on click (push, remove, bubble, etc.)
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140, // How far the line interaction goes
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true // Enables retina display support
  });
  
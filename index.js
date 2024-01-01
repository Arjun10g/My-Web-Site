// gsap.registerPlugin(Flip);
// gsap.registerPlugin(Draggable);

// let layouts = ["final", "plain", "column", "final"],
// 		container = document.querySelector(".container"),
// 		curLayout = 0; // index of the current layout

// function nextState() {
//   const state = Flip.getState(".letter, .for", {props: "color,backgroundColor", simple: true}); // capture current state
  
//   container.classList.remove(layouts[curLayout]); // remove old class
//   curLayout = (curLayout + 1) % layouts.length;   // increment (loop back to the start if at the end)
//   container.classList.add(layouts[curLayout]);    // add the new class

//   Flip.from(state, { // animate from the previous state
//     absolute: true,
//     stagger: 0.07,
//     duration: 0.7,
//     ease: "power2.inOut",
//     spin: curLayout === 0, // only spin when going to the "final" layout
//     simple: true,
//     onEnter: (elements, animation) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay: animation.duration() - 0.1}),
//     onLeave: elements => gsap.to(elements, {opacity: 0})
//   });

//   gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
// }

// gsap.delayedCall(1, nextState);

// gsap.delayedCall(5, () => {
//     let tl = gsap.timeline();
//     tl.to('.container', {opacity:0,duration:0.5, ease: 'power2.inOut'}) // Hide the container (display: none)
//     tl.set('.container', {display:'none'}) // Hide the container (display: none)
//     tl.set('.cont1', {display:'block'}) // Show the container (display: block)
//     tl.to('.cont1', {opacity:1,duration:0.5, ease: 'power2.inOut'}) // Show the container (display: block)
//     tl.set('.header-ov', {display:'flex'}) // Show the container (display: block)
//     tl.to('.header-ov', {opacity:1,duration:0.5, ease: 'power2.inOut'}) // Show the container (display: block)
//     tl.set('.cont2', {display:'flex'}) // Show the container (display: block)
//     tl.to('.cont2', {opacity:1,duration:0.5, ease: 'power2.inOut'}) // Show the container (display: block)
// });


// Used to calculate distance of "tug"
// Used to calculate distance of "tug"
// let startX;
// let startY;

// const AUDIO = {
//   CLICK: new Audio('https://assets.codepen.io/605876/click.mp3'),
// };
// const STATE = {
//   ON: false,
// };
// const CORD_DURATION = 0.1;

// const CORDS = document.querySelectorAll('.toggle-scene__cord');
// const HIT = document.querySelector('.toggle-scene__hit-spot');
// const DUMMY = document.querySelector('.toggle-scene__dummy-cord');
// const DUMMY_CORD = document.querySelector('.toggle-scene__dummy-cord line');
// const PROXY = document.createElement('div');
// // set init position
// const ENDX = DUMMY_CORD.getAttribute('x2');
// const ENDY = DUMMY_CORD.getAttribute('y2');
// const RESET = () => {
//   gsap.set(PROXY, {
//     x: ENDX,
//     y: ENDY,
//   });
// };

// RESET();

// const CORD_TL = gsap.timeline({
//   paused: true,
//   onStart: () => {
//     STATE.ON = !STATE.ON;
//     document.documentElement.style.setProperty('--on', STATE.ON ? '1' : '0');
//     [DUMMY, HIT].forEach((el) => (el.style.display = 'none'));
//     CORDS[0].style.display = 'block';
//     AUDIO.CLICK.play();
//   },
//   onComplete: () => {
//     [DUMMY, HIT].forEach((el) => (el.style.display = 'block'));
//     CORDS[0].style.display = 'none';
//     RESET();
//   },
// });

// for (let i = 1; i < CORDS.length; i++) {
//   CORD_TL.to(CORDS[0], {
//     morphSVG: CORDS[i],
//     duration: CORD_DURATION,
//     repeat: 1,
//     yoyo: true,
//   });
// }

// Draggable.create(PROXY, {
//   trigger: HIT,
//   type: 'x,y',
//   onPress: function (e) {
//     startX = e.x;
//     startY = e.y;
//   },
//   onDrag: function () {
//     gsap.set(DUMMY_CORD, {
//       attr: {
//         x2: this.x,
//         y2: this.y,
//       },
//     });
//   },
//   onRelease: function (e) {
//     const DISTX = Math.abs(e.x - startX);
//     const DISTY = Math.abs(e.y - startY);
//     const TRAVELLED = Math.sqrt(DISTX * DISTX + DISTY * DISTY);
//     gsap.to(DUMMY_CORD, {
//       attr: { x2: ENDX, y2: ENDY },
//       duration: CORD_DURATION,
//       onComplete: () => {
//         if (TRAVELLED > 50) {
//           CORD_TL.restart();
//         } else {
//           RESET();
//         }
//         document.body.style.backgroundColor = 'floralwhite';
//         gsap.set('.toggle-scene', { display: 'none' });
//         gsap.set('.cont1', { display: 'block' });
//         gsap.to('.cont1', { opacity: 1, duration: 1, ease: 'power2.inOut' });
//         gsap.set('.cont2', { display: 'block' });
//         gsap.to('.cont2', { opacity: 1, duration: 1, ease: 'power2.inOut' });
//       },
//     });
//   },
// });


function clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
        const root = document.querySelector( "html" );
        const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );
      
        const minWidth = minWidthPx / pixelsPerRem;
        const maxWidth = maxWidthPx / pixelsPerRem;
      
        const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
        const yAxisIntersection = -minWidth * slope + minFontSize
      
        return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
}

console.log(clampBuilder( 320, 1200, 1, 2 ))

let containerSecond = document.querySelector('.cont2')
let headerOv = document.querySelector('.header-ov')
let info = document.querySelector('.info')
let windowH = window.innerHeight
let headerOvHeight = headerOv.offsetHeight

containerSecond.style.height = windowH + 'px'
info.style.height = windowH + 'px'
info.style.paddingTop = headerOvHeight*3 + 'px'


console.log(clampBuilder( 320, 1200, 1.25, 3 ))

function typewriterEffect(targetElement, speed) {
    const element = document.querySelector(targetElement);
    const text = element.textContent.trim();
    element.textContent = '';
  
    let charIndex = 0;
    const type = setInterval(() => {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(type);
      }
    }, speed);
  }
  
  // Example usage:
  // Assuming you have an HTML element with id="typewriterText"
  // <div id="typewriterText">Your text here</div>
  // This will create a typewriter effect for the text inside the element
  setTimeout(() => {
    typewriterEffect('#type', 150);
  }, 100);
  
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skillbar');
  
    skillBars.forEach(skill => {
      const width = skill.getAttribute('data-percent');
      const bar = skill.querySelector('.skillbar-bar');
      gsap.to(bar, { width: width, duration: 2 }); // Adjust the duration as needed
    });
  }

  
  let images = document.querySelectorAll('div[class*="tab"]')
  let imagesArr = Array.from(images)
//   Remove First Element
    imagesArr.shift()

  console.log(imagesArr)

    imagesArr.forEach((image, index) => {
        image.style.cursor = 'pointer'
        const url = image.getAttribute('data-url');
        image.addEventListener('click', () => {
            window.open(url, '_blank');
        });
    });

    // Get all elements with the class "option"
var options = document.querySelectorAll(".option");

// Add click event listener to each "option" element
options.forEach(function(option) {
  option.addEventListener("click", function() {
    // Remove "active" class from all "option" elements
    options.forEach(function(opt) {
      opt.classList.remove("active");
    });

    // Add "active" class to the clicked "option" element
    this.classList.add("active");
  });
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.cont2 > div:not(.skills)').forEach((section, index) => {
    if (index % 2 === 0) {
    gsap.from(section, {
        scrollTrigger: {
            scroller: '.cont2',
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            // markers: true
        },
        xPercent: -100,
        opacity: 0,
        duration: 1
    }
    )
    } else {
        gsap.from(section, {
            scrollTrigger: {
                scroller: '.cont2',
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                // markers: true
            },
            xPercent: 100,
            opacity: 0,
            duration: 1
        }
        )
    }
})

gsap.from('.skills', {
    scrollTrigger: {
        scroller: '.cont2',
        trigger: '.skills',
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => setTimeout(animateSkillBars, 500),
        // markers: true
    },
    xPercent: 100,
    opacity: 0,
    duration: 0.5
}
)

gsap.registerPlugin(Observer);

let cont1 = document.querySelector('.cont1')
let windowHei = window.innerHeight
let windowWidth = window.innerWidth

if (windowWidth > 1000) {
    Observer.create({
      target: '.cont2',
      type: "touch,scroll,pointer,wheel",
      onChange: (self) => {
        let maxVal = -30;
        let minVal = -200;
        console.log(self.deltaY);
        if (self.deltaY > 0) {
          gsap.to(cont1, { top: maxVal,duration: 4, ease: 'none', delay: 0.5});
        } else if (self.deltaY < 0) {
          gsap.to(cont1, { top: minVal,duration: 4, ease: 'none', delay: 0.5});
        }
      }
    });
  }
  

import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
var typed= new Typed('#dev',{
    strings:['FULL STACK DEV'],
    typeSpeed:30,
    backSpeed:10,
    loop:true
})
gsap.set(".ball", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
    
});
// Set the target image
const image = document.getElementById("gray");

// Add a listener for mouse movement on the image
image.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;

    // Get the mouse position relative to the image
    const rect = image.getBoundingClientRect();
    const mouseX = (clientX - rect.left) / image.offsetWidth;
    const mouseY = (clientY - rect.top) / image.offsetHeight;

    // Calculate the grayscale intensity based on mouse position
    const grayscaleIntensity = 1 - Math.sqrt(mouseX ** 2 + mouseY ** 2);

    // Apply the grayscale effect using GSAP
    gsap.to(image, {
        filter: `grayscale(${grayscaleIntensity})`,
        duration: 0.5
    });
});

// Reset the image when the mouse leaves the image area
image.addEventListener("mouseleave", () => {
    gsap.to(image, {
        filter: "grayscale(0)",
        duration: 0.5
    });
});



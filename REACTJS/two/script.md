📘 Frontend Tools & React Notes
1️⃣ GSAP (Animations)

GSAP is used to create smooth motion animations on websites.

🔗 Add GSAP CDN
<script 
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
  crossorigin="anonymous"
  referrerpolicy="no-referrer">
</script>

✨ Basic GSAP Example
gsap.to(".box", {
  x: 500,
  duration: 2,
  delay: 2
});


Meaning

x: 500 → move 500px to the right

duration: 2 → takes 2 seconds

delay: 2 → starts after 2 seconds

2️⃣ React Core Files (CDN Setup)

React needs two libraries to work.

File	Purpose
react.development.js	Builds UI (components, elements)
react-dom.development.js	Connects React to the browser (DOM)
🔗 Add React CDN
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


React = What to show
ReactDOM = Where to show

3️⃣ Lenis (Smooth Scrolling)

Lenis is used for:

Buttery smooth scrolling

Modern UI motion

Used in:

Portfolio sites

Landing pages

4️⃣ Swiper.js (Sliders & Carousels)

Swiper helps create:

Image sliders

Testimonial sliders

Mobile-friendly carousels

Used in:

Landing pages

Ecommerce

Portfolios

5️⃣ Three.js (3D on Web)

Three.js is used to build:

3D objects

3D animations

Interactive websites

Used in:

Gaming sites

Product demos

Cinematic landing pages

6️⃣ Why React is Powerful

React makes frontend:

Fast

Flexible

Efficient

Only the part that changes gets updated — not the whole page.

This is why React feels smooth compared to normal JavaScript DOM updates.
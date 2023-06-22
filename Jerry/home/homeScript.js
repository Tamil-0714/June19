let typed = new Typed(".near-name", {
  strings: [
    "Tyrannosaurus Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Diplodocus",
    "Allosaurus",
    "Ankylosaurus",
    "Pterodactyl",
    "Spinosaurus",
    "Apatosaurus",
    "Iguanodon",
    "Carnotaurus",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

window.addEventListener("DOMContentLoaded", () => {
  const square = document.querySelector(".testimonial-slide");
  const width = square.offsetWidth;
  square.style.height = `${width}px`;
});
AOS.init();
var swiper6 = new Swiper(".mySwiper6", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      // shadow: true,
      // origin: "left center",
      // translate: ["-120%", 0, -500],
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      // origin: "right center",
      // translate: ["120%", 0, -500],
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      $(".card").hide(0);
      $(".card").removeClass("aos-init").removeClass("aos-animate");
    },
    slideChangeTransitionEnd: function () {
      $(".card").show(0);
      AOS.init();
    },
  },
});
let midHead = [
  "Remember when , into the dark",
  "I alwyas Belive that you love me",
  "Think like that",
  `We go the love \n I'll follow you appolo`,
];
let imgs = [1, 2, 3, 4];
let images = [];
function preloadImages(urls, callback) {
  var loadedCount = 0;
  function imageLoaded() {
    loadedCount++;
    if (loadedCount === urls.length) {
      callback();
    }
  }

  for (var i = 0; i < urls.length; i++) {
    var img = new Image();
    img.onload = imageLoaded;
    img.onerror = imageLoaded;
    // img.src = urls[i] + ".jpg";
    img.src = `../img/${urls[i]}.jpg`;
    images.push(img);
  }
}
preloadImages(imgs, function () {
  console.log("All images are preloaded!");
  console.log(images);

  // `background: url("../img/1.jpg") center/cover fixed no-repeat;`
  let circles = document.querySelectorAll(".inside-cirle");
  swiper6.on("slideChange", () => {
    const myHead = document.querySelector(".mid-head");
    const imgCircle = document.querySelector(".img-circle");
    imgCircle.style.opacity = 0;
    // imgCircle.style.background = `url("../img/${
    //   images[swiper6.activeIndex].currentSrc
    // }.jpg") center/cover fixed no-repeat`
    imgCircle.style.background = `url("${
      images[swiper6.activeIndex].src
    }") center/cover fixed no-repeat`;
    imgCircle.style.opacity = 1;
    myHead.style.opacity = 0;
    setTimeout(() => {
      myHead.innerHTML = midHead[swiper6.activeIndex];
      myHead.style.opacity = 1;
    }, 300);
    console.log(swiper6.activeIndex);
    if (swiper6.activeIndex - 1 != -1) {
      circles[swiper6.activeIndex - 1].classList.remove("present");
    }
    circles[swiper6.activeIndex].classList.add("present");
    if (swiper6.activeIndex + 1 < circles.length)
      circles[swiper6.activeIndex + 1].classList.remove("present");
  });
});
const just = document.querySelector(".just");
const alright = document.querySelector(".alright");
const gif = document.querySelector(".gif");
gif.addEventListener('dblclick', async function(){
  just.innerHTML = "";
  alright.innerHTML = "";
  await typeText("Love u Jerry❤️", just, 100);
 // setTimeout(() => {
  await typeText("Love you too Tom❤️", alright, 100);
 // }, 650);
});
function typeText(text, element, delay) {
  return new Promise(function (resolve) {
  let index = 0;
  const typingInterval = setInterval(() => {
    element.innerHTML += text[index];
    index++;
    if (index === text.length) {
      clearInterval(typingInterval);
      resolve();
    }
  }, delay);
  });
}
// cards.forEach((card) => {
//   // if(card.classList.contains("aos-init")){
//   //   card.classList.remove("aos-init");
//   //   card.classList.add("aos-init");
//   //   card.classList.remove("aos-animate");
//   //   card.classList.add("aos-animate");

//   }
//   // card.classList.toggle("aos-init");
//   // card.classList.toggle("aos-animate");
// });

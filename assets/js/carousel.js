    // SLIDE ANIMATION
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slide3 = document.getElementById("slide3");
    const slide4 = document.getElementById("slide4");
    const slide1_1 = document.getElementById("slide1_1");
    const slideBox = document.getElementById("slide-box");
    const rightButton = document.getElementsByClassName("slide-right")[0];
    const leftButton = document.getElementsByClassName("slide-left")[0];
    const dots = document.getElementsByClassName("dot");

    let arr = [slide1, slide2, slide3, slide4, slide1_1];

    const options = {
      duration: 600,
      easing: "ease-in-out",
      fill: "forwards",
    };

    if (slideBox.classList.contains("animation-right")) {
      slideBox.animate(keyframesRight, options);
    } else if (slideBox.classList.contains("animation-left")) {
      slideBox.animate(keyframesLeft, options);
    }

    
    let index = 0;
    let autoCarouselInterval;
    // Slide if click
    rightButton.addEventListener("click", () => {
      stopAutoCarousel();
      if (index < arr.length - 1) {
        index++;
      } else {
        index = 1;
        rightButtonAnimation(index);
      }
      rightButtonAnimation(index);
      startAutoCarousel();
    });
    
    leftButton.addEventListener("click", () => {
      stopAutoCarousel();
      if (index > 0) {
        index--;
      } else {
        index = arr.length - 1;
      }
      leftButtonAnimation(index);
      startAutoCarousel();
    });
    
    // Start auto carousel
    startAutoCarousel();





    // FUNCTIONS
    // Start auto carousel
    function startAutoCarousel() {
      autoCarouselInterval = setInterval(() => {
        if (index < arr.length - 1) {
          index++;
        } else {
          index = 1;
          rightButtonAnimation(index);
        }
        rightButtonAnimation(index);
      }, 5000); // Adjust the interval time as needed
    }
    
    // Stop auto carousel
    function stopAutoCarousel() {
      clearInterval(autoCarouselInterval);
    }
    function rightButtonAnimation(index) {
      let x1 = (100 * index - 100) * -1;
      let x2 = index * -100;
      let keyframesRight = [
        { transform: `translateX(${x1}%)` },
        { transform: `translateX(${x2}%)`, offset: 1 },
      ];
      slideBox.animate(keyframesRight, options);
      slideBox.classList.add("animation-right");
      setDot(index);
    }

    function leftButtonAnimation(index) {
      let x2 = index * -100;
      let x1 = x2 - 100;
      let keyframesLeft = [
        { transform: `translateX(${x1}%)` },
        { transform: `translateX(${x2}%)`, offset: 1 },
      ];
      slideBox.animate(keyframesLeft, options);
      slideBox.classList.add("animation-left");
      setDot(index);
    }

    function setDot(index) {
      console.log("index " + index);
      if (index === arr.length - 1) {
        index = 0;
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor =
          index === i ? "#ee4d2d" : "hsla(0, 0%, 100%, 0.4)";
        dots[i].style.borderColor =
          index === i ? "#ee4d2d" : "hsla(0, 0%, 100%, 0.4)";
      }
    }
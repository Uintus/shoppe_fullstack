"use strict";

document.addEventListener("DOMContentLoaded", function () {
  init();

  /**
   * init - write your logic here
   */
  function init() {
    // SHOW QRCODE, NOTIF, CART & ACCOUNT
    const QRcode = document.getElementsByClassName("header__qr")[0];
    const notif = document.getElementsByClassName("notif-popup")[0];
    const acc = document.getElementsByClassName("acc-popup")[0];
    const cart = document.getElementsByClassName("cart-popup")[0];
    const slide_box = document.getElementsByClassName("slide__img-left")[0];
    const sale_boxbig = document.getElementsByClassName("content__sales")[0];

    const header_code = document.getElementsByClassName("navbar-item1")[0];
    const header_notif = document.getElementsByClassName("navbar-item")[0];
    const header_acc = document.getElementsByClassName("navbar-item")[2];
    const header_cart = document.getElementsByClassName("product")[0];
    const buttons = document.getElementsByClassName("button");
    const saleButtons = document.getElementsByClassName("sale-button");

    header_code.addEventListener("mouseenter", () => {
      QRcode.classList.remove("hidden");
      QRcode.classList.add("grow--animated");
    });
    header_code.addEventListener("mouseleave", () => {
      QRcode.classList.add("hidden");
    });

    growShrinkAnimation(header_notif, notif);
    growShrinkAnimation(header_acc, acc);
    growShrinkAnimation(header_cart, cart);

    for (let eachButton of buttons) {
      slide_box.addEventListener("mouseenter", () => {
        eachButton.classList.remove("hidden");
        eachButton.classList.remove("disappear--animated");
        eachButton.classList.add("appear--animated");
      });
      slide_box.addEventListener("mouseleave", () => {
        eachButton.classList.add("disappear--animated");
      });
    }

    for (let eachSaleButton of saleButtons) {
      sale_boxbig.addEventListener("mouseenter", () => {
        eachSaleButton.classList.add("bigger--animated");
      });
      sale_boxbig.addEventListener("mouseleave", () => {
        eachSaleButton.classList.remove("bigger--animated");
        eachSaleButton.classList.add("smaller--animated");
      });
    }

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

    const option2 = {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
    };

    let index = 0;
    let autoCarouselInterval;
    // Slide if click
    rightButton.addEventListener("click", () => {
      stopAutoCarousel();
      if (index < arr.length - 1) {
        index++;
      } else {
        index = 1;
        rightButtonAnimation(slideBox, index, true, 100);
      }
      rightButtonAnimation(slideBox, index, true, 100);
      startAutoCarousel();
    });

    leftButton.addEventListener("click", () => {
      stopAutoCarousel();
      if (index > 0) {
        index--;
      } else {
        index = arr.length - 1;
      }
      leftButtonAnimation(slideBox, index, true, 100);
      startAutoCarousel();
    });

    // Start auto carousel
    startAutoCarousel();

    //SLIDE CATES
    let index_sale = 0;

    const items = document.getElementsByClassName("sales__content-item"); // array
    // const item_box = document.getElementsByClassName("sales__content")[0];
    const item_box = document.getElementById("slideSale_box");

    const rightSaleButton = document.getElementsByClassName("sale-right")[0];
    const leftSaleButton = document.getElementsByClassName("sale-left")[0];
    const numItems = 6;
    const items_length = Math.ceil(items.length / numItems) - 1;

    // hàm thao tác button
    const toggleVisibility = (button, isRight) => {
      if (isRight ? index_sale < items_length : index_sale > 0) {
        index_sale += isRight ? 1 : -1;
      }
      button.classList.toggle(
        "hidden",
        index_sale === items_length || index_sale === 0
      );
      leftSaleButton.classList.toggle("hidden", index_sale === 0);
      rightSaleButton.classList.toggle("hidden", index_sale === items_length);
      (isRight ? rightButtonAnimation : leftButtonAnimation)(
        item_box,
        index_sale,
        false,
        85.5
      );
    };

    rightSaleButton.addEventListener("click", () =>
      toggleVisibility(rightSaleButton, true)
    );
    leftSaleButton.addEventListener("click", () =>
      toggleVisibility(leftSaleButton, false)
    );

    // check ẩn hiện của button
    if (index_sale === items_length) {
      rightSaleButton.classList.add("hidden");
    } else if (index_sale === 0) {
      leftSaleButton.classList.add("hidden");
    } else {
      rightSaleButton.classList.remove("hidden");
      leftSaleButton.classList.remove("hidden");
    }

    // TIME ANIMATION
    let autoTimeSlideInterval;
    const hours_tens = document.getElementsByClassName("hours-tens")[0];
    const hours_units = document.getElementsByClassName("hours-units")[0];
    const mins_tens = document.getElementsByClassName("min-tens")[0];
    const mins_units = document.getElementsByClassName("min-units")[0];
    const secs_tens = document.getElementsByClassName("sec-tens")[0];
    const secs_units = document.getElementsByClassName("sec-units")[0];

    runTime(23, 50, 6);

    // FUNCTIONS
    // Start auto carousel
    function runTime(hour, min, sec) {
      let hour_tens = Math.floor(hour / 10);
      if (hour_tens === 0) {
        hour_tens = 10;
      }
      let hour_units = hour % 10;
      if (hour_units === 0) {
        hour_units = 10;
      }
      let min_tens = Math.floor(min / 10);
      if (min_tens === 0) {
        min_tens = 10;
      }

      let min_units = min % 10;
      if (min_units === 0) {
        // min_units = 10;
      }

      let sec_tens = Math.floor(sec / 10);
      if (sec_tens === 0) {
        // sec_tens = 10;
      }
      let sec_units = sec % 10;
      if (sec_units === 0) {
        sec_units = 10;
      }

      console.log("sec-ten " + sec_tens);
      let hour_tensIndex = 10 - hour_tens;
      let hour_unitsIndex = 10 - hour_units;
      let min_tensIndex = 10 - min_tens;
      let min_unitsIndex = 10 - min_units;
      let sec_tensIndex = 10 - sec_tens;
      let sec_unitsIndex = 10 - sec_units;

      let autoTimeSlideIntervalId = autoTimeSlide(secs_units);

      // timeSlide(secs_units, sec_unitsIndex);
      timeSlide(secs_tens, sec_tensIndex, false);
      timeSlide(mins_units, min_unitsIndex, false);
      timeSlide(mins_tens, min_tensIndex, false);
      timeSlide(hours_units, hour_unitsIndex, false);
      timeSlide(hours_tens, hour_tensIndex, false);

      setInterval(() => {
        console.log(
          "sec_tens + sec_units " + sec_tensIndex + " " + sec_unitsIndex
        );
        console.log(
          "min_tens + min_units " + min_tensIndex + " " + min_unitsIndex
        );

        if (sec_unitsIndex === 10 && sec_tensIndex !== 10) {
          sec_tensIndex++;
          timeSlide(secs_tens, sec_tensIndex, true);
          console.log("if1");
        } 
        else if (sec_unitsIndex === 10 && sec_tensIndex === 10) {
          // if (min_unitsIndex === 10 && min_tensIndex !== 10) {
          //   min_tensIndex++;
          //   timeSlide(mins_tens, min_tensIndex, true);
          //   console.log("if2.2");
          // }
          sec_tensIndex = 4;
          min_unitsIndex = 1;
          timeSlide(mins_units, min_unitsIndex, true);

          // if (min_unitsIndex === 10 && min_tensIndex !== 10) {
          //   min_tensIndex++;
          //   timeSlide(mins_tens, min_tensIndex, true);
          //   console.log("if2.2");
          // }
          console.log("if2");
        }
        // else if (sec_units === 10) {
        //   // sec_tens = 5;
        //   sec_tens = timeSlide(secs_tens, sec_tens);
        //   console.log(sec_tens + " 2nd");
        //   sec_tens++;
        //   console.log("if2");

        // }
      }, 1005); // Log the updated sec_units value every second

     //////VẤN ĐỀ THỜI GIAN SET ĐỂ NHẬN DỮ LIỆU 

      function autoTimeSlide(frame) {
        autoTimeSlideInterval = setInterval(() => {
          if (sec_unitsIndex < 10) {
            sec_unitsIndex++;
          } else {
            sec_unitsIndex = 1;
            slideDown(frame, sec_unitsIndex, 100 / 11);
          }
          slideDown(frame, sec_unitsIndex, 100 / 11);
        }, 1150); // Adjust the interval time as needed
        return autoTimeSlideInterval;
      }
    }

    function clearAutoTimeSlide() {
      clearInterval(autoTimeSlideInterval);
    }

    function timeSlide(frame, index, isChange) {
      // if (isChange) {
      //   index++;
      // }

      // if (index <= 10) {
      slideDown(frame, index, 100 / 11);
      // } else {
      //   index = 5;
      //   slideDown(frame, index, 100 / 11);
      // }
    }

    function slideDown(frame, index, expectedHeight) {
      let y1 = (expectedHeight * index - expectedHeight) * -1;
      let y2 = index * -expectedHeight;

      let keyframesSlideUp = [
        { transform: `translateY(${y1}%)` },
        { transform: `translateY(${y2}%)`, offset: 1 },
      ];
      frame.animate(keyframesSlideUp, option2);
    }

    function growShrinkAnimation(header, item) {
      header.addEventListener("mouseenter", () => {
        item.classList.remove("hidden");
        item.classList.remove("shrink--animated");
        item.classList.add("grow--animated");
      });
      header.addEventListener("mouseleave", () => {
        item.classList.add("shrink--animated");
      });
    }

    function startAutoCarousel() {
      autoCarouselInterval = setInterval(() => {
        if (index < arr.length - 1) {
          index++;
        } else {
          index = 1;
          rightButtonAnimation(slideBox, index, true, 100);
        }
        rightButtonAnimation(slideBox, index, true, 100);
      }, 5000); // Adjust the interval time as needed
    }

    // Stop auto carousel
    function stopAutoCarousel() {
      clearInterval(autoCarouselInterval);
    }
    function rightButtonAnimation(frame, index, haveDots, expectedWidth) {
      if (haveDots === true) {
        setDot(index);
      }
      let x1 = (expectedWidth * index - expectedWidth) * -1;
      let x2 = index * -expectedWidth;
      let keyframesRight = [
        { transform: `translateX(${x1}%)` },
        { transform: `translateX(${x2}%)`, offset: 1 },
      ];
      frame.animate(keyframesRight, options);
      frame.classList.add("animation-right");
    }

    function leftButtonAnimation(frame, index, haveDots, expectedWidth) {
      if (haveDots === true) {
        setDot(index);
      }
      let x2 = index * -expectedWidth;
      let x1 = x2 - expectedWidth;
      let keyframesLeft = [
        { transform: `translateX(${x1}%)` },
        { transform: `translateX(${x2}%)`, offset: 1 },
      ];
      frame.animate(keyframesLeft, options);
      frame.classList.add("animation-left");
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
  }
});

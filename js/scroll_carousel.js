window.addEventListener("DOMContentLoaded", () => {
  const menuList = document.querySelector(".details_overview");
  const arrowButtons = document.querySelectorAll(".nav_buttons > button");
  const leftArrow = document.querySelector(".left_nav_btn");
  const rightArrow = document.querySelector(".right_nav_btn");
  const innerScrollIndicator = document.querySelector(
    ".inner_scroll_indicator"
  );
  const currentIndicator = document.querySelector(".current_indicator")

  const firstCardWidth = menuList.querySelector(".box").offsetWidth;

  let currentScrollWidth = 33.3;
  let currentIndicatorNumber = parseInt(currentIndicator.textContent)

  innerScrollIndicator.style.width = currentScrollWidth + "%";

  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowButtons.forEach((button) => {
    button.addEventListener("click", () => {
      menuList.scrollLeft +=
        button.id === "left" ? -(firstCardWidth / 2) : firstCardWidth / 2;

      if (currentScrollWidth <= 100 && button.id === "right") {
        currentScrollWidth += 33.3;
        innerScrollIndicator.style.width = currentScrollWidth + "%";
        currentIndicator.textContent = currentIndicatorNumber += 1
      }

      if (currentScrollWidth > 30 && button.id === "left") {
        currentScrollWidth -= 33.3;
        innerScrollIndicator.style.width = currentScrollWidth + "%";
        currentIndicator.textContent = currentIndicatorNumber -= 1
      }

      rightArrow.classList.add("showRightArrow")
    });
  });

  // If the carousel is at the beginning, hide left arrow
  menuList.addEventListener("scroll", () => {
    if (menuList.scrollLeft === 0) {
      leftArrow.classList.remove("showLeftArrow");
      innerScrollIndicator.style.width = 33 + "%";
    } else {
      leftArrow.classList.add("showLeftArrow");
    }

    /* If the carousel is at the end, hide the right arrow */
    if (menuList.scrollLeft > 300) {
        rightArrow.classList.remove("showRightArrow");
      } else {
        rightArrow.classList.add("showRightArrow");
      }
  });
});

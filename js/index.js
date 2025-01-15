/* ------------------------------------- Slider on Home Page - Hero Section ---------------------------------- */
const slides = document.querySelectorAll(".slide");
const slideFooterIndicators = document.querySelectorAll(".indicator");
let currentSlide = 0;

const slideContent = document.querySelectorAll(".slide_content");

function changeSlide(index) {
  // Remove active class from all slides and indicators
  slides.forEach((slide) => slide.classList.remove("active"));

  slideFooterIndicators.forEach((indicator) =>
    indicator.classList.remove("active")
  );

  // Add active class to the current slide and indicator
  slides[index].classList.add("active");
  slideFooterIndicators[index].classList.add("active");

  // Update the background color of the active indicator
  slideFooterIndicators.forEach((indicator) => {
    const indicatorId = parseInt(indicator.getAttribute("data-id"));

    if (index === indicatorId) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });

  slideContent.forEach((slide, i) => {
    if (index === i) {
      setTimeout(() => {
        slide.classList.add("active");
      }, 1000);
    } else {
      slide.classList.remove("active");
    }
  });

  currentSlide = index;
}

setInterval(() => {
  let nextSlide = (currentSlide + 1) % slides.length;
  changeSlide(nextSlide);
}, 5000); // Change slide every 5 seconds

changeSlide(currentSlide);

/* ------------------------------------ Desktop Navigation --------------------------------------- */
const desktopNavigationContainer = document.querySelector(
  ".desktop_navigation_container"
);

const productContainer = document.querySelector(".products");
const solutionsContainer = document.querySelector(".solutions");
const resourcesContainer = document.querySelector(".resources");
const desktopNavOverlay = document.querySelector(".desktop_navigation_overlay");

const productsUl = document.querySelector(".products_ul");
const solutionsUl = document.querySelector(".solutions_ul");
const resourcesUl = document.querySelector(".resources_ul");

/* ---------------------------- Navbar for Desktop View --------------------------- */
desktopNavigationContainer.addEventListener("mouseleave", () => {
  desktopNavigationContainer.classList.remove(
    "desktop_navigation_container_show"
  );
  desktopNavOverlay.classList.remove("desktop_navigation_overlay_show");
});

/* ------------- Product Nav ----------------------- */
productContainer.addEventListener("mouseover", () => {
  solutionsUl.classList.remove("show_soutions_ul");
  resourcesUl.classList.remove("show_resources_ul");

  desktopNavigationContainer.classList.add("desktop_navigation_container_show");
  desktopNavOverlay.classList.add("desktop_navigation_overlay_show");
  productsUl.classList.add("show_products_ul");
});

/* ------------- Solutions Nav ----------------------- */
solutionsContainer.addEventListener("mouseover", () => {
  productsUl.classList.remove("show_products_ul");
  resourcesUl.classList.remove("show_resources_ul");

  desktopNavigationContainer.classList.add("desktop_navigation_container_show");
  desktopNavOverlay.classList.add("desktop_navigation_overlay_show");
  solutionsUl.classList.add("show_soutions_ul");
});

/* -------------------------------------- No Code Builder Image Slider ------------------------------------ */
const firstBanner = document.querySelector(".first_banner");
const innerFirstBanner = document.querySelector(".inner_first_banner");
const secondBannner = document.querySelector(".second_banner");
const innerSecondBanner = document.querySelector(".inner_second_ban");

secondBannner.classList.add("active");
firstBanner.classList.add("active");

setInterval(() => {
  if (secondBannner.classList.contains("active")) {
    secondBannner.classList.remove("active");
    innerSecondBanner.classList.add("active");
    innerFirstBanner.classList.add("active");
  } else {
    innerSecondBanner.classList.remove("active");
    secondBannner.classList.add("active");

    innerFirstBanner.classList.remove("active");
    firstBanner.classList.add("active");
  }
}, 3000);

/* ---------------------------------------- The Platform Section -------------------------------------- */
const contentBox = document.querySelectorAll(".content_box");
const platformImage = document.querySelectorAll(".platform_image");

let currentContentBox = 0;

function changeActiveContent(index) {
  // Remove active class from all slides and indicators
  contentBox.forEach((content) => content.classList.remove("active"));
  platformImage.forEach((image) => image.classList.remove("active"));

  contentBox[index].classList.add("active");
  platformImage[index].classList.add("active");

  contentBox.forEach((content, i) => {
    content.addEventListener("click", () => {
      currentContentBox = i - 1
    });
  });

  currentContentBox = index;
}

setInterval(() => {
  let nextContent = (currentContentBox + 1) % contentBox.length;
  changeActiveContent(nextContent);
}, 3000); // Change slide every 2 seconds

changeActiveContent(currentContentBox);

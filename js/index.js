
/* ------------------ Slider on Home Page - Hero Section ------------------- */
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
      }, 1000)
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


/* ----------------------- Desktop Navigation ----------------- */
const desktopNavigationContainer = document.querySelector(".desktop_navigation_container")

const productContainer = document.querySelector(".products")
const solutionsContainer = document.querySelector(".solutions")
const resourcesContainer = document.querySelector(".resources")
const desktopNavOverlay = document.querySelector(".desktop_navigation_overlay")
// const groupFour = document.querySelector(".price")

const productsUl = document.querySelector(".products_ul")
const solutionsUl = document.querySelector(".solutions_ul")
const resourcesUl = document.querySelector(".resources_ul")

/* ---------------------------- Navbar for Desktop View --------------------------- */
/* ------------- Product Nav ----------------------- */
productContainer.addEventListener("mouseover", () => {
  desktopNavigationContainer.classList.add("desktop_navigation_container_show")
  desktopNavOverlay.classList.add("desktop_navigation_overlay_show")

  solutionsUl.classList.remove("show_soutions_ul")
  resourcesUl.classList.remove("show_resources_ul")
  productsUl.classList.add("products_ul_show")
})

desktopNavigationContainer.addEventListener("mouseleave", () => {
  desktopNavigationContainer.classList.remove("desktop_navigation_container_show")
  desktopNavOverlay.classList.remove("desktop_navigation_overlay_show")
})

/* ---------------- Solutions Nav --------------------- */
// solutionsContainer.addEventListener("mouseover", () => {
//   featuresUl.classList.remove("show_features_ul")
//   compareUl.classList.remove("show_compare_ul")
//   resourceUl.classList.add("show_resource_ul")
// })

// resourceUl.addEventListener("mouseleave", () => {
//   resourceUl.classList.remove("show_resource_ul")
// })

/* ----------------- Resources Nav --------------------- */
// resourcesContainer.addEventListener("mouseover", () => {
//   resourceUl.classList.remove("show_resource_ul")
//   compareUl.classList.add("show_compare_ul")
// })

// compareUl.addEventListener("mouseleave", () => {
//   compareUl.classList.remove("show_compare_ul")
// })

/* ------------- Token Nav --------------- */
// groupFour.addEventListener("mouseover", () => {
//   featuresUl.classList.remove("show_features_ul")
//   resourceUl.classList.remove("show_resource_ul")
//   compareUl.classList.remove("show_compare_ul")
// })

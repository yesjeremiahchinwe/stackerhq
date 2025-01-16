window.addEventListener("DOMContentLoaded", () => {
  const experienceNavButtons = document.querySelectorAll(
    ".experience_navigation > button"
  );
  const articleElements = document.querySelectorAll(".article_elem")

  let currentExpBtn = 0;
  experienceNavButtons[currentExpBtn].classList.add("show_active_button");

  function changeCurrentExperience(index) {
    // Remove active class from all slides and indicators
    experienceNavButtons.forEach((button) => button.classList.remove("show_active_button"));
    articleElements.forEach((article) => article.classList.remove("show_active_article"))

    experienceNavButtons[index].classList.add("show_active_button");
    articleElements[index].classList.add("show_active_article");

    currentExpBtn = index
  }

  setInterval(() => {
    let nextSlide = (currentExpBtn + 1) % experienceNavButtons.length;
    changeCurrentExperience(nextSlide);
  }, 4000); // Change slide every 4 seconds
  
  changeCurrentExperience(currentExpBtn);
});

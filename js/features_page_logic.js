window.addEventListener("DOMContentLoaded", () => {
  const experienceNavButtons = document.querySelectorAll(
    ".experience_navigation > button"
  );
  const articleElements = document.querySelectorAll(".article_elem")

  let currentExpBtn = 0;
  let interateDelay = 4000
  experienceNavButtons[currentExpBtn].classList.add("show_active_button");

  function changeCurrentExperience(index) {
    // Remove active class from all slides and indicators
    experienceNavButtons.forEach((button) => button.classList.remove("show_active_button"));
    articleElements.forEach((article) => article.classList.remove("show_active_article"))

    experienceNavButtons[index].classList.add("show_active_button");
    articleElements[index].classList.add("show_active_article");

    // Toggle active experience view
    experienceNavButtons.forEach((button, i) => {
      const buttonId = parseInt(button.getAttribute("data-id"))

      button.addEventListener("click", () => {
          if (buttonId === i) {
            button.classList.add("show_active_button");
            changeCurrentExperience(buttonId)
            interateDelay = 8000
          } else {
            button.classList.remove("show_active_button");
          }
      })
    })

    currentExpBtn = index
  }
  
  setInterval(() => {
    let nextSlide = (currentExpBtn + 1) % experienceNavButtons.length;
    changeCurrentExperience(nextSlide);
  }, interateDelay);
  changeCurrentExperience(currentExpBtn);
});

window.addEventListener("DOMContentLoaded", () => {
  const questionsAndAnswers = document.querySelectorAll(
    ".question_answer_wrapper"
  );
  const allAnswers = document.querySelectorAll(".answer");

  questionsAndAnswers.forEach((questionAnswer, index) => {
    const questionId = parseInt(questionAnswer.getAttribute("data-id"));

    questionAnswer.addEventListener("click", () => {
      if (questionId === index) {
        questionAnswer.classList.toggle("toggle_question");

        if (!allAnswers[index].classList.contains("show_answer")) {
          setTimeout(() => {
            allAnswers[index].classList.add("show_answer");
          }, 250);
        } else {
          allAnswers[index].classList.remove("show_answer");
        }
      }
    });
  });
});

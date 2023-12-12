const featureTab = document.querySelectorAll(".feature-tab");

const featureTabContent = document.querySelectorAll(".section-features-tab");

for (let i = 0; i < featureTab.length; i++) {
  featureTab[i].addEventListener("click", function () {
    // Deactivate all tabs and their content
    for (let j = 0; j < featureTab.length; j++) {
      featureTab[j].classList.remove("li-active");
      featureTabContent[j].classList.add("hidden");
    }

    // Activate the clicked tab and its content
    featureTab[i].classList.add("li-active");
    featureTabContent[i].classList.remove("hidden");
  });
}

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const iconArrow = document.querySelectorAll(".fa-angle-down");

for (let questionIndex = 0; questionIndex < questions.length; questionIndex++) {
  questions[questionIndex].addEventListener("click", function () {
    for (let i = 0; i < questions.length; i++) {
      if (i !== questionIndex) {
        answers[i].classList.add("hidden");
        iconArrow[i].classList.remove("arrow-rotate");
      }
    }

    answers[questionIndex].classList.toggle("hidden");
    iconArrow[questionIndex].classList.toggle("arrow-rotate");
  });
}

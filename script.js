let topic;

function startQuiz(index) {
  let quizContentRef = document.getElementById("quiz-content");
  quizContentRef.innerHTML = "";
  switch (index) {
    case 0:
      topic = "HTML";
      renderQuizContent(index, topic);
      break;

    case 1:
      topic = "CSS";
      renderQuizContent(index, topic);
      break;

    case 2:
      topic = "JavaScript";
      renderQuizContent(index, topic);
      break;

    default:
      quizContentRef.innerHTML += `<h5>Welcome to the <br /> Quiz App!</h5>`;
      break;
  }
}

function renderQuizContent(index, topic) {
  let quizContentRef = document.getElementById("quiz-content");
  quizContentRef.innerHTML = "";
  quizContentRef.innerHTML = getQuizContentHTMLTemplate(index, topic);
}

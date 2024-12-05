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
  let questionIndex = 0;
  quizContentRef.innerHTML = "";
  quizContentRef.innerHTML = getQuizContentHTMLTemplate(index, questionIndex, topic);
}

function nextQuestion(index, questionIndex, topic) {
  console.table(index, questionIndex, topic);
  let newQuestionIndex = questionIndex + 1;
  let quizContentRef = document.getElementById("quiz-content");
  quizContentRef.innerHTML = "";
  quizContentRef.innerHTML = getQuizContentHTMLTemplate(index, newQuestionIndex, topic);
}

function previousQuestion(index, questionIndex, topic) {
  let newQuestionIndex = questionIndex - 1;
  let quizContentRef = document.getElementById("quiz-content");
  quizContentRef.innerHTML = "";
  quizContentRef.innerHTML = getQuizContentHTMLTemplate(index, newQuestionIndex, topic);
}

function selectAnswer(index, questionIndex, answer_index) {
  let correctAnswer = questions[index][questionIndex].correctAnswer;
  let chosenAnswerRef = document.getElementById(`quiz-content-answer-${answer_index}`);
  let correctAnswerRef = document.getElementById(`quiz-content-answer-${correctAnswer}`);
  let nextQuestionButtonRef = document.getElementById('next-question-button')
  if (correctAnswer === answer_index) {
    chosenAnswerRef.classList.add("bg-success");
  } else {
    chosenAnswerRef.classList.add("bg-danger");
    correctAnswerRef.classList.add("bg-success")
  }
  nextQuestionButtonRef.disabled = false
}

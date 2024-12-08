let topic;
let correctAnswers = 0;

function startQuiz(topicIndex) {
  let quizContentRef = document.getElementById("quiz-content");
  quizContentRef.innerHTML = "";
  correctAnswers = 0;
  switch (topicIndex) {
    case 0:
      topic = "HTML";
      renderQuizContent(topicIndex, topic);
      break;

    case 1:
      topic = "CSS";
      renderQuizContent(topicIndex, topic);
      break;

    case 2:
      topic = "JavaScript";
      renderQuizContent(topicIndex, topic);
      break;

    default:
      quizContentRef.innerHTML += `<h5>Welcome to the <br /> Quiz App!</h5>`;
      break;
  }
}

function renderQuizContent(topicIndex, topic) {
  let quizContentRef = document.getElementById("quiz-content");
  let questionIndex = 0;
  //   quizContentRef.innerHTML = "";
  quizContentRef.innerHTML = getQuizContentHTMLTemplate(topicIndex, questionIndex, topic);
  renderCurrentQuestionNumber(questionIndex);
}

function nextQuestion(topicIndex, questionIndex) {
  let quizContentRef = document.getElementById("quiz-content");
  let topic = document.getElementById("quiz-content-header").innerHTML;
  questionIndex++;
  if (questionIndex >= questions[topicIndex].length) {
    let endscreenRef = document.getElementById("endscreen");
    document.getElementById("quiz-content").style = "display:none;";
    endscreenRef.parentNode.classList.remove("startup-bg");
    endscreenRef.style = "flex-direction:column;";
    endscreenRef.classList.add("centralized");
    endscreenRef.innerHTML = getQuizResultHTMLTemplate(topic, topicIndex);
  } else {
    quizContentRef.innerHTML = getQuizContentHTMLTemplate(topicIndex, questionIndex, topic);
    renderCurrentQuestionNumber(questionIndex);
  }
}

function selectAnswer(index, questionIndex, answer_index) {
  let correctAnswer = questions[index][questionIndex].correctAnswer;
  let chosenAnswerRef = document.getElementById(`quiz-content-answer-${answer_index}`);
  let correctAnswerRef = document.getElementById(`quiz-content-answer-${correctAnswer}`);
  let nextQuestionButtonRef = document.getElementById("next-question-button");
  if (correctAnswer === answer_index) {
    chosenAnswerRef.classList.add("bg-success");
    correctAnswers++;
  } else {
    chosenAnswerRef.classList.add("bg-danger");
    correctAnswerRef.classList.add("bg-success");
  }
  nextQuestionButtonRef.disabled = false;
}

function renderCurrentQuestionNumber(questionIndex) {
  let currentQuestionNumberRef = document.getElementById("current-question-index");
  let currentQuestionNumber = questionIndex + 1;
  currentQuestionNumberRef.innerHTML = currentQuestionNumber;
}

function renderStartScreen() {
  let quizMainScreen = document.getElementById("main-content");
  quizMainScreen.innerHTML = getMainScreenHTMLTemplate();
}

function replayQuiz() {
  correctAnswers = 0;
  renderStartScreen();
}

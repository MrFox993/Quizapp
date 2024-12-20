function getQuizContentHTMLTemplate(topicIndex, questionIndex, topic) {
  return `
            <div>
            <h4 id="quiz-content-header">${topic}</h4>
            <h5 id="quiz-content-question">${questions[topicIndex][questionIndex].question}</h5>
            <div id="quiz-content-answers">
            <ol class="list-group list-group-numbered">
                <li class="list-group-item quiz-answer-card" id="quiz-content-answer-1" onclick="selectAnswer(${topicIndex},${questionIndex},1)">${questions[topicIndex][questionIndex].answer_1}</li>
                <li class="list-group-item quiz-answer-card" id="quiz-content-answer-2" onclick="selectAnswer(${topicIndex},${questionIndex},2)">${questions[topicIndex][questionIndex].answer_2}</li>
                <li class="list-group-item quiz-answer-card" id="quiz-content-answer-3" onclick="selectAnswer(${topicIndex},${questionIndex},3)">${questions[topicIndex][questionIndex].answer_3}</li>
                <li class="list-group-item quiz-answer-card" id="quiz-content-answer-4" onclick="selectAnswer(${topicIndex},${questionIndex},4)">${questions[topicIndex][questionIndex].answer_4}</li>
            </ol>
            </div>
            <nav aria-label="Page navigation example">
            <ul class="pagination centralized">
                </li>
                <b id="current-question-index">number</b> / <b id="max-question-index">${questions[topicIndex].length}</b>
                <li class="page-item">
                <button id="next-question-button" class="page-link quiz-answer-card" onclick="nextQuestion(${topicIndex}, ${questionIndex})" aria-label="Next" disabled>
                    <span aria-hidden="true">&raquo;</span>
                </button>
                </li>
            </ul>
            </nav>
        </div>
    `;
}

function getQuizResultHTMLTemplate(topic, topicIndex) {
  return `
        <img src="./Quizapp_Design/brain result.png" alt="" />
        <h5>Complete ${topic} Quiz</h5>
        <div> Your Score: <b>${correctAnswers}</b> / <b>${questions[topicIndex].length}</b>
        <button onclick="replayQuiz()">Replay</button>
    `;
}

function getMainScreenHTMLTemplate() {
  return `
        <div class="split-screen h-w-wfa">
        <div class="card bg-dark-catagory p-3 h-w-wfa">
        <img src="./Quizapp_Design/logo.png" class="card-img-top pb-3" alt="logo" />
        <div class="card">
            <ul class="list-group list-group-flush">
            <li class="list-group-item bg-dark-catagory">
                <button type="button" onclick="startQuiz(0)" class="bg-dark-catagory">HTML</button>
            </li>
            <li class="list-group-item bg-dark-catagory">
                <button type="button" onclick="startQuiz(1)" class="bg-dark-catagory">CSS</button>
            </li>
            <li class="list-group-item bg-dark-catagory">
                <button type="button" onclick="startQuiz(2)" class="bg-dark-catagory">JavaScript</button>
            </li>
            </ul>
        </div>
        </div>
        <div class="card startup-bg centralized p-3 h-w-wfa">
        <div id="endscreen" style="display: none">
        </div>
        <div id="quiz-content">
            <h5>
            Welcome to the <br />
            Quiz App!
            </h5>
        </div>
        </div>
    </div>
    `;
}

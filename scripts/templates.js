function getQuizContentHTMLTemplate(index, questionIndex, topic) {
    let currentQuestionNumber = questionIndex + 1
    return `
            <div>
            <h4 id="quiz-content-header">${topic}</h4>
            <h5 id="quiz-content-question">${questions[index][questionIndex].question}</h5>
            <div id="quiz-content-answers">
            <ol class="list-group list-group-numbered">
                <li class="list-group-item quiz-answer-card" id="quiz-content-answer-1" onclick="selectAnswer(${index},${questionIndex},1)">${questions[index][questionIndex].answer_1}</li>
                <li class="list-group-item quiz-answer-card" id="quiz-content-answer-2" onclick="selectAnswer(${index},${questionIndex},2)">${questions[index][questionIndex].answer_2}</li>
                <li class="list-group-item quiz-answer-card" id="quiz-content-answer-3" onclick="selectAnswer(${index},${questionIndex},3)">${questions[index][questionIndex].answer_3}</li>
                <li class="list-group-item quiz-answer-card" id="quiz-content-answer-4" onclick="selectAnswer(${index},${questionIndex},4)">${questions[index][questionIndex].answer_4}</li>
            </ol>
            </div>
            <nav aria-label="Page navigation example">
            <ul class="pagination centralized">
                <li class="page-item">
                <button class="page-link quiz-answer-card" onclick="previousQuestion(${index}, ${questionIndex}, ${topic})" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </button>
                </li>
                <b id="current-question-index">${currentQuestionNumber}</b> / <b id="max-question-index">${questions[index].length}</b>
                <li class="page-item">
                <button id="next-question-button" class="page-link quiz-answer-card" onclick="nextQuestion(${index}, ${questionIndex}, ${topic})" aria-label="Next" disabled>
                    <span aria-hidden="true">&raquo;</span>
                </button>
                </li>
            </ul>
            </nav>
        </div>
    `;
}
function getQuizContentHTMLTemplate(index, topic) {
    let defaultQuestionIndex = 0;
    let currentQuestionIndex = defaultQuestionIndex + 1
    return `
            <div>
            <h4 id="quiz-content-header">${topic}</h4>
            <h5 id="quiz-content-question">${questions[index][defaultQuestionIndex].question}</h5>
            <div id="quiz-content-answers">
            <ol class="list-group list-group-numbered">
                <li class="list-group-item" id="quiz-content-answer-1">${questions[index][defaultQuestionIndex].answer_1}</li>
                <li class="list-group-item" id="quiz-content-answer-2">${questions[index][defaultQuestionIndex].answer_2}</li>
                <li class="list-group-item" id="quiz-content-answer-3">${questions[index][defaultQuestionIndex].answer_3}</li>
                <li class="list-group-item" id="quiz-content-answer-4">${questions[index][defaultQuestionIndex].answer_4}</li>
            </ol>
            </div>
            <nav aria-label="Page navigation example">
            <ul class="pagination centralized">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <b id="current-question-index">${currentQuestionIndex}</b> / <b id="max-question-index">${questions[index].length}</b>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
    `;
}
function Score() {

}

Score.getTotal = function (form, questions) {
    var score = 0;

    questions.fillins.forEach(function (fillin) {
        score += fillin.getScore(form);
    });
    questions.choices.forEach(function (choice) {
        score += choice.getScore(form);
    });
    questions.multis.forEach(function (multi) {
        score += multi.getScore(form);
    });
    questions.judgements.forEach(function (judgement) {
        score += judgement.getScore(form);
    });
    questions.shortAnswers.forEach(function (shortAnswer) {
        score += shortAnswer.getScore(form);
    });

    return score;
};

module.exports = Score;
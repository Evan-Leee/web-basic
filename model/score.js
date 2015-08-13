function Score(){

}

Score.getTotal = function(form,questions) {
    var score = 0;
    score += questions['block'].getScore(form);

    score += questions['choose'].getScore(form);

    score += questions['multi'].getScore(form);

    score += questions['judge'].getScore(form);

    score += questions['shortAnswer'].getScore(form);

    return score;
};

module.exports = Score;
var QuizUI = {

    populateIdWithHTML : function(id, text){
        var element = document.getElementById(id);
        element.innerHTML = text;

    },

    guessHandler : function(id, guess){
        var button = document.getElementById(id);
        button.onclick = function(){
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },

    displayProgress : function(){
        var questionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML('progress','Question : ' + questionNumber + ' of ' + quiz.questions.length);
    },

    displayQuestion : function(){
        this.populateIdWithHTML('question', quiz.getCurrentQuestion().text);
    },

    displayChoices : function(){
        var choices = quiz.getCurrentQuestion().choices;
        for(var i =0; i < choices.length; i++){
            this.populateIdWithHTML('choice'+i, choices[i]);
            this.guessHandler('guess'+i, choices[i]);
        };
    },

    displayScore : function(){
        var gameOverHTML = '<h1>GAME OVER!</h1>';
        gameOverHTML += 'Your  score  : ' + quiz.score + ' from ' + quiz.questions.length;
        this.populateIdWithHTML('quiz', gameOverHTML)
    },

    displayNext : function(){
        if(quiz.hasEnded()){
           this.displayScore();
        }else{
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        };
    }

}

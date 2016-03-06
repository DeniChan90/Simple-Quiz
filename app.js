var questions = [
    new Question('Which ocean is the largest?',
                 ['Atlantic', 'Pacific', 'Indian', 'Southern'],
                 'Pacific' ),
    new Question('Who was the first president of the USA?',
                ['George Washington','Thomas Jefferson', 'Andrew Jackson', 'Ulysses S. Grant'],
                'George Washington'),
    new Question('Who developed the C++ programming language?',
                 ['Larry Wall','Dennis Ritchie','Guido van Rossum', 'Bjarne Stroustrup'],
                'Bjarne Stroustrup'),
    new Question('When JavaScript first appeared?',
                 ['1991','1995', '1997', '1999'],
                 '1997'),

];
var quiz = new Quiz(questions);

QuizUI.displayNext();

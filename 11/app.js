//Create Questions
var questions = [
    new Question("Who is the current president(2017) of India?", [ "Narendra Modi", "Pranab Mukherjee" ], "Pranab Mukherjee"),
    new Question("Correct Value of PI till 8 decimal places?", ["3.14159265","3.14158275"], "3.14159265"),
    new Question("Entomology is the science that studies..", ["The formation of rocks","Insects"], "Insects"),
    new Question("Hitler party which came into power in 1933 is known as", ["Ku-Klux-Klan","Nazi Party"], "Nazi Party"),
    new Question("FFC stands for", ["Foreign Finance Corporation","Federation of Football Council"], "Foreign Finance Corporation")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();


// Exercise 17: Quiz Application
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');
let score = 0;
let answered = 0;
const totalQuestions = document.querySelectorAll('.question').length;

quiz.addEventListener('click', (e) => {
    if (e.target.classList.contains('answer-btn')) {
        const question = e.target.closest('.question');
        
        // Check if already answered
        if (question.classList.contains('answered')) {
            return;
        }
        
        const correctAnswer = question.dataset.correct;
        const selectedAnswer = e.target.dataset.answer;
        
        // Mark button as correct or wrong
        if (selectedAnswer === correctAnswer) {
            e.target.classList.add('correct');
            score++;
        } else {
            e.target.classList.add('wrong');
            // Also highlight the correct answer
            const buttons = question.querySelectorAll('.answer-btn');
            buttons.forEach(btn => {
                if (btn.dataset.answer === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }
        
        // Mark question as answered
        question.classList.add('answered');
        answered++;
        
        // Check if all questions answered
        if (answered === totalQuestions) {
            result.textContent = `You scored ${score} out of ${totalQuestions}!`;
            resetBtn.style.display = 'block';
        }
    }
});

resetBtn.addEventListener('click', () => {
    score = 0;
    answered = 0;
    document.querySelectorAll('.question').forEach(q => q.classList.remove('answered'));
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('correct', 'wrong', 'selected');
    });
    result.textContent = '';
    resetBtn.style.display = 'none';
});
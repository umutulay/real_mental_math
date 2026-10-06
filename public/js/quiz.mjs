import { generateQuestion } from './generate_question.mjs';
const mode = localStorage.getItem('timerType') || 'total-time';
const limit = Number(localStorage.getItem('timeLimit')) || 30;
const started = Date.now();
let deadline = started + limit * 1000;
let answer, correct = 0, attempts = 0, streak = 0, bestStreak = 0, locked = false, ended = false, nextQuestion;
const input = document.getElementById('answer');
const feedback = document.getElementById('feedback');
document.getElementById('session-label').textContent = `${localStorage.getItem('quizType') || 'addition'} · ${localStorage.getItem('difficulty') || 'easy'}`.toUpperCase();
function newQuestion() {
  if (ended) return;
  locked = false;
  answer = generateQuestion();
  input.value = '';
  input.disabled = false;
  document.getElementById('submit-answer').disabled = false;
  feedback.textContent = '';
  input.focus();
  if (mode === 'per-question') deadline = Date.now() + limit * 1000;
}
function finish() {
  if (ended) return;
  ended = true;
  clearInterval(timer);
  clearTimeout(nextQuestion);
  const result = {correct,attempts,bestStreak,seconds:Math.max(1,Math.round((Date.now()-started)/1000)),type:localStorage.getItem('quizType') || 'addition',difficulty:localStorage.getItem('difficulty') || 'easy',mode,limit};
  const key = `personalBest:${result.type}:${result.difficulty}:${mode}:${limit}`;
  const previousBest = Number(localStorage.getItem(key)) || 0;
  result.personalBest = Math.max(previousBest,correct);
  result.newBest = correct > previousBest;
  if (mode !== 'untimed') localStorage.setItem(key,result.personalBest);
  localStorage.setItem('sessionResult',JSON.stringify(result));
  window.location.href = '/results';
}
function resolveQuestion(isCorrect,timedOut=false) {
  if (locked || ended) return;
  locked = true;
  attempts++;
  if (isCorrect) {correct++;streak++;bestStreak=Math.max(bestStreak,streak);} else streak=0;
  document.getElementById('score').textContent = correct;
  document.getElementById('streak').textContent = bestStreak;
  feedback.className = isCorrect ? 'success' : 'incorrect';
  feedback.textContent = isCorrect ? '✓ Correct. Keep going!' : `${timedOut ? 'Time’s up.' : 'Not quite.'} The answer is ${answer}.`;
  input.disabled = true;
  document.getElementById('submit-answer').disabled = true;
  nextQuestion = setTimeout(newQuestion,isCorrect ? 450 : 1500);
}
function checkAnswer(automatic = false) {
  if (locked || ended) return;
  if (input.value.trim() === '') return;
  if (mode !== 'untimed' && Date.now() >= deadline) {
    if (mode === 'total-time') finish(); else resolveQuestion(false,true);
    return;
  }
  const isCorrect = Number(input.value) === answer;
  if (automatic && !isCorrect) return;
  resolveQuestion(isCorrect);
}
input.addEventListener('input', () => checkAnswer(true));
document.getElementById('answer-form').addEventListener('submit',event => {
  event.preventDefault();
  checkAnswer();
});
document.getElementById('end-quiz').addEventListener('click',finish);
function updateTimer() {
  const remaining = Math.max(0,Math.ceil((deadline-Date.now())/1000));
  document.getElementById('timer').textContent = mode === 'untimed' ? '∞' : `${remaining}s`;
  const progress = document.getElementById('time-progress');
  progress.hidden = mode === 'untimed';
  progress.value = remaining / limit * 100;
  progress.classList.toggle('urgent',remaining <= 5);
  if (mode === 'total-time' && Date.now() >= deadline) finish();
  if (mode === 'per-question' && Date.now() >= deadline && !locked) resolveQuestion(false,true);
}
newQuestion();
const timer = setInterval(updateTimer,100);
updateTimer();

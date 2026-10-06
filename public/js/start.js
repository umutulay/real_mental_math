const type = document.getElementById('quiz-type');
const difficulty = document.getElementById('difficulty');
const mode = document.getElementById('timer-type');
const duration = document.getElementById('time-limit');
for (const [element, key] of [[type, 'quizType'], [difficulty, 'difficulty'], [mode, 'timerType']]) {
  const saved = localStorage.getItem(key);
  if ([...element.options].some(option => option.value === saved)) element.value = saved;
}
function updateDuration() {
  const previous = duration.value || localStorage.getItem('timeLimit');
  const values = mode.value === 'per-question' ? [5,10,15,20,25] : [25,30,35,40,50,60];
  duration.replaceChildren(...values.map(value => new Option(`${value} seconds`, value)));
  if (values.includes(Number(previous))) duration.value = previous;
  document.getElementById('time-field').hidden = mode.value === 'untimed';
  updateSummary();
}
function updateSummary() {
  const level = difficulty.value;
  const descriptions = {easy:'Start small with single-digit numbers.',medium:'Mix single- and double-digit numbers.',hard:'Stretch your skills with double-digit numbers.'};
  const examples = {addition:['4 + 7','46 + 8','37 + 58'],subtraction:['8 − 3','46 − 8','82 − 37'],multiplication:['4 × 7','46 × 8','37 × 58'],division:['24 ÷ 6','96 ÷ 8','156 ÷ 4'],mixed:['4 + 7','96 ÷ 8','37 × 58']};
  document.getElementById('difficulty-description').textContent = type.value === 'division' ? `Whole-number answers from 1 to ${{easy:9,medium:30,hard:99}[level]}.` : descriptions[level] + (type.value === 'mixed' ? ' All four operations.' : '');
  document.getElementById('example').textContent = examples[type.value][['easy','medium','hard'].indexOf(level)] + ' = ?';
  document.getElementById('session-summary').textContent = `${type.value} · ${level} · ${mode.value === 'untimed' ? 'No timer' : duration.value + 's' + (mode.value === 'per-question' ? ' per question' : '')}`;
}
mode.addEventListener('change', updateDuration);
for (const element of [type,difficulty,duration]) element.addEventListener('change', updateSummary);
document.getElementById('start-button').addEventListener('click', () => {
  for (const [element,key] of [[type,'quizType'],[difficulty,'difficulty'],[mode,'timerType'],[duration,'timeLimit']]) localStorage.setItem(key,element.value);
  window.location.href = '/quiz';
});
updateDuration();

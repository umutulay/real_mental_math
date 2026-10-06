const result = JSON.parse(localStorage.getItem('sessionResult') || 'null');
if (result) {
  document.getElementById('final-score').textContent = result.correct;
  document.getElementById('result-context').textContent = `${result.type} · ${result.difficulty} · ${result.attempts} answered`;
  document.getElementById('accuracy').textContent = result.attempts ? Math.round(result.correct/result.attempts*100)+'%' : '—';
  document.getElementById('average').textContent = result.attempts ? (result.seconds/result.attempts).toFixed(1)+'s' : '—';
  document.getElementById('best-streak').textContent = result.bestStreak;
  document.getElementById('final-time').textContent = result.seconds+'s';
  document.getElementById('personal-best').textContent = result.mode === 'untimed' ? 'Keep practicing. Speed comes with confidence.' : `${result.newBest ? '✦ New personal best!' : 'Personal best:'} ${result.personalBest} correct with these settings.`;
} else document.getElementById('result-context').textContent = 'Start a practice session to see your results.';
document.getElementById('retry').addEventListener('click',() => window.location.href = '/quiz');

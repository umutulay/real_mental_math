export function generateSubstractionQuestion() {
    num1 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    num2 = Math.floor(Math.random() * 101);
    correctAnswer = num1 - num2;
    document.getElementById("question").textContent = `${num1} - ${num2}`;
}
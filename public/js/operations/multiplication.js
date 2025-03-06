export function generateMultiplicationQuestion() {
    let num1 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    let num2 = Math.floor(Math.random() * 11); // Random number between 0 and 10
    let correctAnswer = num1 * num2;
    document.getElementById("question").textContent = `${num1} x ${num2}`;
    return correctAnswer;
}
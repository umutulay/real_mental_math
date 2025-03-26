export function generateDivisionEasyQuestion() {
    const num2 = Math.floor(Math.random() * 10) + 1;    // Random number between 0 and 9
    const num1 = num2 * (Math.floor(Math.random() * 10) + 1);
    const correctAnswer = num1 / num2;
    document.getElementById("question").textContent = `${num1} / ${num2}`;
    return correctAnswer;
}

export function generateDivisionMediumQuestion() {
    const num2 = Math.floor(Math.random() * 100) + 1;    // Random number between 0 and 9
    const num1 = num2 * (Math.floor(Math.random() * 30) + 1);
    const correctAnswer = num1 / num2;
    document.getElementById("question").textContent = `${num1} / ${num2}`;
    return correctAnswer;
}

export function generateDivisionHardQuestion() {
    const num2 = Math.floor(Math.random() * 100) + 1;    // Random number between 0 and 9
    const num1 = num2 * (Math.floor(Math.random() * 100) + 1);
    const correctAnswer = num1 / num2;
    document.getElementById("question").textContent = `${num1} / ${num2}`;
    return correctAnswer;
}
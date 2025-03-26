export function generateAdditionEasyQuestion() {
    const num1 = Math.floor(Math.random() * 10);    // Random number between 0 and 9
    const num2 = Math.floor(Math.random() * 10);
    const correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
    return correctAnswer;
}

export function generateAdditionMediumQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 100);   // Random number between 0 and 99
    const correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
    return correctAnswer;
}

export function generateAdditionHardQuestion() {
    const num1 = Math.floor(Math.random() * 100); 
    const num2 = Math.floor(Math.random() * 100);
    const correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
    return correctAnswer;
}
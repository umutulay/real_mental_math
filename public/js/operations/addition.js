export function generateAdditionEasyQuestion() {
    num1 = Math.floor(Math.random() * 11); // Random number between 0 and 10
    num2 = Math.floor(Math.random() * 11);
    correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}

export function generateAdditionMediumQuestion() {
    num1 = Math.floor(Math.random() * 11); // Random number between 0 and 10
    num2 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}

export function generateAdditionHardQuestion() {
    num1 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    num2 = Math.floor(Math.random() * 101);
    correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}
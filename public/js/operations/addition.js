export function generateAdditionEasyQuestion() {
    let num1 = Math.floor(Math.random() * 11); // Random number between 0 and 10
    let num2 = Math.floor(Math.random() * 11);
    let correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}

export function generateAdditionMediumQuestion() {
    let num1 = Math.floor(Math.random() * 11); // Random number between 0 and 10
    let num2 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    let correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}

export function generateAdditionHardQuestion() {
    let num1 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    let num2 = Math.floor(Math.random() * 101);
    let correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}

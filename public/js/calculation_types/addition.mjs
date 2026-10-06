export function generateAdditionEasyQuestion() {
    const num1 = Math.floor(Math.random() * 10);    // Random number between 0 and 9
    const num2 = Math.floor(Math.random() * 10);
    const swap = num1 < 10 && num2 >= 10;
    const first = swap ? num2 : num1;
    const second = swap ? num1 : num2;
    const correctAnswer = first + second;
    document.getElementById("question").textContent = `${first} + ${second}`;
    return correctAnswer;
}

export function generateAdditionMediumQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 100);   // Random number between 0 and 99
    const swap = num1 < 10 && num2 >= 10;
    const first = swap ? num2 : num1;
    const second = swap ? num1 : num2;
    const correctAnswer = first + second;
    document.getElementById("question").textContent = `${first} + ${second}`;
    return correctAnswer;
}

export function generateAdditionHardQuestion() {
    const num1 = Math.floor(Math.random() * 100); 
    const num2 = Math.floor(Math.random() * 100);
    const swap = num1 < 10 && num2 >= 10;
    const first = swap ? num2 : num1;
    const second = swap ? num1 : num2;
    const correctAnswer = first + second;
    document.getElementById("question").textContent = `${first} + ${second}`;
    return correctAnswer;
}

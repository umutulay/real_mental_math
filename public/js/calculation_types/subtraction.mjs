export function generateSubtractionEasyQuestion() {
    const num1 = Math.floor(Math.random() * 10);    // Random number between 0 and 9
    const num2 = Math.floor(Math.random() * 10);
    const first = Math.max(num1, num2);
    const second = Math.min(num1, num2);
    const correctAnswer = first - second;
    document.getElementById("question").textContent = `${first} - ${second}`;
    return correctAnswer;
}

export function generateSubtractionMediumQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 100);   // Random number between 0 and 99
    const first = Math.max(num1, num2);
    const second = Math.min(num1, num2);
    const correctAnswer = first - second;
    document.getElementById("question").textContent = `${first} - ${second}`;
    return correctAnswer;
}

export function generateSubtractionHardQuestion() {
    const num1 = Math.floor(Math.random() * 100); 
    const num2 = Math.floor(Math.random() * 100);
    const first = Math.max(num1, num2);
    const second = Math.min(num1, num2);
    const correctAnswer = first - second;
    document.getElementById("question").textContent = `${first} - ${second}`;
    return correctAnswer;
}

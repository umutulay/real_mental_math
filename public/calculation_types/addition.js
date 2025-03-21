export function generateAdditionEasyQuestion() {
    const num1 = Math.floor(Math.random() * 10);    // Random number between 0 and 9
    const num2 = Math.floor(Math.random() * 10);
    return {
        question: `${num1} + ${num2}`,
        correctAnswer: num1 + num2
    };
}

export function generateAdditionMediumQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 100);   // Random number between 0 and 99
    return {
        question: `${num1} + ${num2}`,
        correctAnswer: num1 + num2
    };
}

export function generateAdditionHardQuestion() {
    const num1 = Math.floor(Math.random() * 100); 
    const num2 = Math.floor(Math.random() * 100);
    return {
        question: `${num1} + ${num2}`,
        correctAnswer: num1 + num2
    };
}
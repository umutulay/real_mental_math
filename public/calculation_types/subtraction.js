export function generateSubtractionEasyQuestion() {
    const num1 = Math.floor(Math.random() * 10); // Random number between 0 and 9
    const num2 = Math.floor(Math.random() * 10);
    return {
        question: `${num1} - ${num2}`,
        correctAnswer: num1 - num2
    };
}

export function generateSubtractionMediumQuestion() {
    const num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    const num2 = Math.floor(Math.random() * 10);
    return {
        question: `${num1} - ${num2}`,
        correctAnswer: num1 - num2
    };
}

export function generateSubtractionHardQuestion() {
    const num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    const num2 = Math.floor(Math.random() * 100);
    return {
        question: `${num1} - ${num2}`,
        correctAnswer: num1 - num2
    };
}
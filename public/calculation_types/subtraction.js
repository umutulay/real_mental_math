export function generateSubtractionEasyQuestion() {
    num1 = Math.floor(Math.random() * 10); // Random number between 0 and 9
    num2 = Math.floor(Math.random() * 10);
    return {
        question: `${num1} - ${num2}`,
        correctAnswer: num1 - num2
    };
}

export function generateSubtractionMediumQuestion() {
    num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    num2 = Math.floor(Math.random() * 10);
    return {
        question: `${num1} - ${num2}`,
        correctAnswer: num1 - num2
    };
}

export function generateSubtractionHardQuestion() {
    num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    num2 = Math.floor(Math.random() * 100);
    return {
        question: `${num1} - ${num2}`,
        correctAnswer: num1 - num2
    };
}
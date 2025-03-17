export function generateAdditionEasyQuestion() {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    return {
        question: `${num1} + ${num2}`,
        correctAnswer: num1 + num2
    };
}

export function generateAdditionMediumQuestion() {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 101);
    return {
        question: `${num1} + ${num2}`,
        correctAnswer: num1 + num2
    };
}

export function generateAdditionHardQuestion() {
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);
    return {
        question: `${num1} + ${num2}`,
        correctAnswer: num1 + num2
    };
}
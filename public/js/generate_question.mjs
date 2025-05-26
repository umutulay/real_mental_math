import { generateAdditionEasyQuestion, generateAdditionMediumQuestion, generateAdditionHardQuestion } from "./calculation_types/addition.mjs";
import { generateSubtractionEasyQuestion, generateSubtractionMediumQuestion, generateSubtractionHardQuestion } from "./calculation_types/subtraction.mjs";
import { generateMultiplicationEasyQuestion, generateMultiplicationMediumQuestion, generateMultiplicationHardQuestion } from "./calculation_types/multiplication.mjs";
import { generateDivisionEasyQuestion, generateDivisionMediumQuestion, generateDivisionHardQuestion } from "./calculation_types/division.mjs";

function getQuestionType() {
    return localStorage.getItem("quizType") || "addition"; // Default to addition
}

function getDifficulty() {
    return localStorage.getItem("difficulty") || "easy"; // Default to easy
}

export function generateQuestion() {
    let operation = getQuestionType();
    const difficulty = getDifficulty();

    if (operation === "mixed") {
        const types = ["addition", "subtraction", "multiplication", "division"];
        operation = types[Math.floor(Math.random() * types.length)];
    }

    switch (operation) {
        case "addition":
            if (difficulty === "easy") return generateAdditionEasyQuestion();
            else if (difficulty === "medium") return generateAdditionMediumQuestion();
            else if (difficulty === "hard") return generateAdditionHardQuestion();
            break;

        case "subtraction":
            if (difficulty === "easy") return generateSubtractionEasyQuestion();
            else if (difficulty === "medium") return generateSubtractionMediumQuestion();
            else if (difficulty === "hard") return generateSubtractionHardQuestion();
            break;

        case "multiplication":
            if (difficulty === "easy") return generateMultiplicationEasyQuestion();
            else if (difficulty === "medium") return generateMultiplicationMediumQuestion();
            else if (difficulty === "hard") return generateMultiplicationHardQuestion();
            break;

        case "division":
            if (difficulty === "easy") return generateDivisionEasyQuestion();
            else if (difficulty === "medium") return generateDivisionMediumQuestion();
            else if (difficulty === "hard") return generateDivisionHardQuestion();
            break;
    }
}
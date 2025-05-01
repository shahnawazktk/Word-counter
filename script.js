function atLeastTwoCharacters(text) {
    const letters = text.match(/[a-zA-Z]/g);
    return letters && letters.length >= 2;
}

function absenceOfThreeConsecutiveCharacters(text) {
    for (const character of text) {
        const occurrences = Array.from(text).filter(v => v === character).length;
        if (occurrences >= 3) {
            return false;
        }
    }
    return true;
}

const checks = [atLeastTwoCharacters, absenceOfThreeConsecutiveCharacters];

const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

textInput.addEventListener("input", function () {
    const value = textInput.value;

    const splitted = value.trim().split(/[\s-]+/);
    const letterCount = (value.match(/[a-zA-Z]/g) || []).length;
    const spaceCount = (value.match(/\s+/g) || []).length;

    let wordCount = 0;

    outer:
    for (const word of splitted) {
        for (const check of checks) {
            if (!check(word)) {
                continue outer;
            }
        }
        wordCount++;
    }

    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount;
});
const startScreen = document.getElementById("start-screen");
const modeScreen = document.getElementById("mode-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const select2PointButton = document.getElementById("select-2point");
const select3PointButton = document.getElementById("select-3point");
const backToStartButton = document.getElementById("back-to-start");

const quizTypeBadge = document.getElementById("quiz-type-badge");
const progressText = document.getElementById("progress-text");
const questionTitle = document.getElementById("question-title");
const questionImage = document.getElementById("question-image");
const choiceButtons = Array.from(document.querySelectorAll(".choice-button"));

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");

const scoreText = document.getElementById("score-text");
const correctText = document.getElementById("correct-text");
const wrongText = document.getElementById("wrong-text");
const restartButton = document.getElementById("restart-button");
const explanationsContainer = document.getElementById("explanations-container");

const STORAGE_KEY = "lifeScienceQuizState";

let state = {
  currentScreen: "start",
  selectedSet: null,
  currentIndex: 0,
  answers: {}
};

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (
      parsed &&
      typeof parsed === "object" &&
      ["start", "mode", "quiz", "result"].includes(parsed.currentScreen)
    ) {
      state = {
        currentScreen: parsed.currentScreen || "start",
        selectedSet: parsed.selectedSet || null,
        currentIndex: Number.isInteger(parsed.currentIndex) ? parsed.currentIndex : 0,
        answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {}
      };
    }
  } catch (error) {
    console.error("저장된 상태를 불러오지 못했습니다.", error);
  }
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
  state = {
    currentScreen: "start",
    selectedSet: null,
    currentIndex: 0,
    answers: {}
  };
}

function getCurrentProblems() {
  if (!state.selectedSet) return [];
  return problemSets[state.selectedSet] || [];
}

function getCurrentProblem() {
  const problems = getCurrentProblems();
  return problems[state.currentIndex] || null;
}

function showScreen(screenName) {
  startScreen.classList.remove("active");
  modeScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");

  if (screenName === "start") startScreen.classList.add("active");
  if (screenName === "mode") modeScreen.classList.add("active");
  if (screenName === "quiz") quizScreen.classList.add("active");
  if (screenName === "result") resultScreen.classList.add("active");

  state.currentScreen = screenName;
  saveState();
}

function selectMode(setName) {
  state.selectedSet = setName;
  state.currentIndex = 0;
  state.answers = {};
  saveState();
  renderQuiz();
  showScreen("quiz");
}

function renderQuiz() {
  const problems = getCurrentProblems();
  const currentProblem = getCurrentProblem();

  if (!problems.length || !currentProblem) return;

  quizTypeBadge.textContent = currentProblem.type;
  progressText.textContent = `${state.currentIndex + 1} / ${problems.length}`;
  questionTitle.textContent = `${currentProblem.number}번 문제`;
  questionImage.src = currentProblem.image;
  questionImage.alt = `${currentProblem.number}번 문제 이미지`;

  const savedAnswer = state.answers[currentProblem.id];

  choiceButtons.forEach((button) => {
    const choice = Number(button.dataset.choice);
    button.classList.toggle("selected", savedAnswer === choice);
  });

  prevButton.disabled = state.currentIndex === 0;

  const hasAnswer = typeof savedAnswer === "number";

  if (state.currentIndex === problems.length - 1) {
    nextButton.classList.add("hidden");
    finishButton.classList.remove("hidden");
    finishButton.disabled = !hasAnswer;
  } else {
    nextButton.classList.remove("hidden");
    finishButton.classList.add("hidden");
    nextButton.disabled = !hasAnswer;
  }

  saveState();
}

function handleChoiceSelect(choiceNumber) {
  const currentProblem = getCurrentProblem();
  if (!currentProblem) return;

  state.answers[currentProblem.id] = choiceNumber;
  saveState();
  renderQuiz();
}

function goToPreviousQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    saveState();
    renderQuiz();
  }
}

function goToNextQuestion() {
  const problems = getCurrentProblems();
  const currentProblem = getCurrentProblem();
  if (!currentProblem) return;

  const selectedAnswer = state.answers[currentProblem.id];
  if (typeof selectedAnswer !== "number") return;

  if (state.currentIndex < problems.length - 1) {
    state.currentIndex += 1;
    saveState();
    renderQuiz();
  }
}

function calculateResult() {
  const problems = getCurrentProblems();
  let correctCount = 0;

  problems.forEach((problem) => {
    if (state.answers[problem.id] === problem.answer) {
      correctCount += 1;
    }
  });

  const totalCount = problems.length;
  const wrongCount = totalCount - correctCount;
  const score = Math.round((correctCount / totalCount) * 100);

  return {
    totalCount,
    correctCount,
    wrongCount,
    score
  };
}

function renderResults() {
  const problems = getCurrentProblems();
  const result = calculateResult();

  scoreText.textContent = `점수: ${result.score}점`;
  correctText.textContent = `정답 수: ${result.correctCount}개 / ${result.totalCount}개`;
  wrongText.textContent = `오답 수: ${result.wrongCount}개`;

  explanationsContainer.innerHTML = "";

  problems.forEach((problem) => {
    const userAnswer = state.answers[problem.id];
    const isCorrect = userAnswer === problem.answer;

    const item = document.createElement("div");
    item.className = "explanation-item";

    const title = document.createElement("h3");
    title.textContent = `${problem.number}번 문제`;

    const userAnswerText = document.createElement("p");
    userAnswerText.className = "user-answer";
    userAnswerText.innerHTML = `내가 고른 답: <span class="${isCorrect ? "answer-correct" : "answer-wrong"}">${userAnswer}번 ${isCorrect ? "(정답)" : "(오답)"}</span>`;

    const correctAnswerText = document.createElement("p");
    correctAnswerText.innerHTML = `정답: <strong>${problem.answer}번</strong> (${problem.summary})`;

    const explanationList = document.createElement("ul");
    explanationList.className = "explanation-list";

    problem.explanation.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      explanationList.appendChild(li);
    });

    item.appendChild(title);
    item.appendChild(userAnswerText);
    item.appendChild(correctAnswerText);
    item.appendChild(explanationList);

    explanationsContainer.appendChild(item);
  });
}

function finishQuiz() {
  const currentProblem = getCurrentProblem();
  if (!currentProblem) return;

  const selectedAnswer = state.answers[currentProblem.id];
  if (typeof selectedAnswer !== "number") return;

  renderResults();
  showScreen("result");
}

function restartQuiz() {
  clearState();
  showScreen("start");
}

function restoreUI() {
  if (state.currentScreen === "start") {
    showScreen("start");
    return;
  }

  if (state.currentScreen === "mode") {
    showScreen("mode");
    return;
  }

  if (state.currentScreen === "quiz") {
    if (!state.selectedSet) {
      showScreen("start");
      return;
    }
    renderQuiz();
    showScreen("quiz");
    return;
  }

  if (state.currentScreen === "result") {
    if (!state.selectedSet) {
      showScreen("start");
      return;
    }
    renderResults();
    showScreen("result");
    return;
  }

  showScreen("start");
}

startButton.addEventListener("click", () => {
  showScreen("mode");
});

select2PointButton.addEventListener("click", () => {
  selectMode("twoPoint");
});

select3PointButton.addEventListener("click", () => {
  selectMode("threePoint");
});

backToStartButton.addEventListener("click", () => {
  showScreen("start");
});

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choice = Number(button.dataset.choice);
    handleChoiceSelect(choice);
  });
});

prevButton.addEventListener("click", goToPreviousQuestion);
nextButton.addEventListener("click", goToNextQuestion);
finishButton.addEventListener("click", finishQuiz);
restartButton.addEventListener("click", restartQuiz);

loadState();
restoreUI();

let currentStage = 1;
let score = 0;

// Факты для каждого этапа
const facts = [
    "В Тихом океане плавает гигантский мусорный остров размером с три Франции! Он состоит из 1.8 триллиона кусочков пластика, которые образуют настоящий пластиковый суп. Каждый год этот остров становится больше, потому что мы выбрасываем столько пластика, сколько весят 30 миллионов слонов!",
    "Морские черепахи живут на Земле уже более 100 миллионов лет - они видели динозавров! Но сейчас они могут исчезнуть из-за человека. Знаешь ли ты, что одна черепаха может спасти от гибели более 1000 рыб за свою жизнь, поедая ядовитых медуз?",
    "Одно взрослое дерево в тропическом лесу - это дом для 500 видов насекомых и животных! А его корни - настоящий подземный интернет: деревья общаются друг с другом и даже делятся питательными веществами через грибные сети под землёй.",
    "В реках обнаружили следы антибиотиков, болеутоляющих и даже кофеина! Каждый раз, когда мы выбрасываем лекарства в раковину или унитаз, мы создаём коктейль из химикатов, который превращает рыб в мутантов и делает их больными.",
    "В горах Непала живут пчёлы, которые делают галлюциногенный мёд! Но их популяция уменьшается из-за добычи полезных ископаемых. А ведь горные пчёлы опыляют растения на высоте, где другие насекомые не могут летать, и от них зависит жизнь целых горных экосистем."
];

// Начало игры
function startGame() {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('stage1').classList.remove('hidden');
}

// Выбор игрока
function chooseOption(option) {
    if (option === 1 || option === 2) score += 1;
    showFact();
}

// Показать факт
function showFact() {
    const factText = document.getElementById('fact-text');
    factText.textContent = facts[currentStage - 1];
    document.getElementById(`stage${currentStage}`).classList.add('hidden');
    document.getElementById('fact-screen').classList.remove('hidden');
}

// Продолжить игру
function continueGame() {
    if (currentStage < 5) {
        currentStage += 1;
        document.getElementById('fact-screen').classList.add('hidden');
        document.getElementById(`stage${currentStage}`).classList.remove('hidden');
    } else {
        showEndScreen();
    }
}

// Показать итоговую сцену
function showEndScreen() {
    const endScreen = document.getElementById('end-screen');
    const endMessage = document.getElementById('end-message');
    const endImage = document.getElementById('end-image');
    
    if (score >= 4) {
        endMessage.textContent = "Поздравляем! Благодаря твоим мудрым решениям остров спасён. Ты настоящий защитник природы!";
        endImage.src = "quest/image/6g.jpeg";
    } else if (score >= 2) {
        endMessage.textContent = "Остров частично восстановлен. Некоторые экосистемы удалось сохранить, но многие территории всё ещё нуждаются в защите.";
        endImage.src = "quest/image/7f.jpg";
    } else {
        endMessage.textContent = "К сожалению, остров сильно пострадал. Его экосистемы разрушены, а многие виды животных покинули свои места обитания.";
        endImage.src = "quest/image/8b.jpeg";
    }
    
    document.getElementById('fact-screen').classList.add('hidden');
    endScreen.classList.remove('hidden');
}

// Перезапуск игры
function restartGame() {
    currentStage = 1;
    score = 0;
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}
let currentStage = 1;
let score = 0;

// Оценки за каждое решение (индекс массива = номер кнопки - 1)
const stageScores = {
    1: [1, 0.5, 0], // Пляж: уборка = 1, запрет = 0.5, бездействие = 0
    2: [0.5, 1, 0], // Черепахи: переговоры = 0.5, полиция = 1, игнор = 0
    3: [1, 0.7, 0], // Лес: защита = 1, эко-отель = 0.7, вырубка = 0
    4: [0.7, 1, 0], // Река: очистка = 0.7, системное решение = 1, игнор = 0
    5: [0.8, 1, 0]  // Горы: кампания = 0.8, устойчивое развитие = 1, добыча = 0
};

// Факты для каждого этапа
const facts = [
    "В Тихом океане плавает гигантский мусорный остров размером с три Франции! Он состоит из 1.8 триллиона кусочков пластика, которые образуют настоящий пластиковый суп. Каждый год этот остров становится больше, потому что мы выбрасываем столько пластика, сколько весят 30 миллионов слонов.",
    "Морские черепахи живут на Земле уже более 100 миллионов лет - они видели динозавров. Но сейчас они могут исчезнуть из-за человека. Знаешь ли ты, что одна черепаха может спасти от гибели более 1000 рыб за свою жизнь, поедая ядовитых медуз?",
    "Одно взрослое дерево в тропическом лесу - это дом для 500 видов насекомых и животных. А его корни - настоящий подземный интернет: деревья общаются друг с другом и даже делятся питательными веществами через грибные сети под землёй.",
    "В реках обнаружили следы антибиотиков, болеутоляющих и даже кофеина. Каждый раз, когда мы выбрасываем лекарства в раковину или унитаз, мы создаём коктейль из химикатов, который превращает рыб в мутантов и делает их больными.",
    "В горах Индонезии находится самый большой золотой рудник в мире - Грасберг. Для его работы каждый день взрывают большое количество породы. Из-за этого исчезло 90% популяции райских птиц, которые жили здесь тысячи лет. А их исчезновение привело к тому, что перестали расти редкие фруктовые деревья, семена которых разносили только эти птицы."
];

function startGame() {
    currentStage = 1;
    score = 0;
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('stage1').classList.remove('hidden');
}

function chooseOption(option) {
    score += stageScores[currentStage][option - 1];
    showFact();
}

function showFact() {
    const factText = document.getElementById('fact-text');
    factText.textContent = facts[currentStage - 1];
    document.getElementById(`stage${currentStage}`).classList.add('hidden');
    document.getElementById('fact-screen').classList.remove('hidden');
}

function continueGame() {
    if (currentStage < 5) {
        currentStage += 1;
        document.getElementById('fact-screen').classList.add('hidden');
        document.getElementById(`stage${currentStage}`).classList.remove('hidden');
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    const endScreen = document.getElementById('end-screen');
    const endMessage = document.getElementById('end-message');
    const endImage = document.getElementById('end-image');
    
    // Максимально возможный счёт - 5 (по 1 баллу за этап)
    const maxScore = 5;
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 80) {
        endMessage.textContent = "Поздравляем! Благодаря твоим мудрым решениям остров спасён. Ты настоящий защитник природы!";
        endImage.src = "quest/image/6g.jpeg";
    } else if (percentage >= 50) {
        endMessage.textContent = "Остров частично восстановлен. Некоторые экосистемы удалось сохранить, но многие территории всё ещё нуждаются в защите.";
        endImage.src = "quest/image/7f.jpg";
    } else {
        endMessage.textContent = "К сожалению, остров сильно пострадал. Его экосистемы разрушены, а многие виды животных покинули свои места обитания.";
        endImage.src = "quest/image/8b.jpeg";
    }
    
    document.getElementById('fact-screen').classList.add('hidden');
    endScreen.classList.remove('hidden');
}

function restartGame() {
    currentStage = 1;
    score = 0;
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}
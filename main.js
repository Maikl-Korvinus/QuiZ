const questions = [
  {
    //first
    question: "What age are you?",
    answers: ["Under 25", "25-35", "35-45", "45-55", "Over 55"],
    id: 1,
    finalAns: "",
    resualtsAnswers: [
      "Though signs of skin aging become much more common in your 40's and 50's, you may start seeing wrinkles on your face around the age of 25, when collagen levels begin to drop",
      "Though signs of skin aging become much more common in your 40's and 50's, you may start seeing wrinkles on your face around the age of 25, when collagen levels begin to drop.",
      "Collagen levels start significantly dropping in your 30's, making your skin increasingly thinner and less elastic. That's why wrinkles and other skin impurities form more easily at your age.",
      "45-55 - Collagen levels start significantly dropping in your 30's, making your skin increasingly thinner and less elastic. That’s why wrinkles and other skin impurities form more easily at your age.",
      "Collagen levels start significantly dropping in your 30's, making your skin increasingly thinner and less elastic. That’s why wrinkles and other skin impurities form more easily at your age.",
    ],
  },
  {
    //second
    question: "How often do you eat fast food and/or sugary food?",
    answers: ["Every day", "Every few days", "Rarely"],
    id: 2,
    finalAns: "",
    resualtsAnswers: [
      "The processed carbs that make up many fast foods clog your pores, leading to breakouts and acne, while the refined vegetable oils that items like french fries are cooked boost inflammation processes - a major underlying cause of chronic skin conditions. Processed sugar breaks down the collagen proteins that form smooth, youthful skin. Included in WINGO cream Salicylic acid and Sodium Hyaluronate work on deepest skin levels to unclog pores, remove inflammation and improve skin texture.",
      "The processed carbs that make up many fast foods clog your pores, leading to breakouts, while the refined vegetable oils that items like french fries are cooked boost inflammation processes - a major underlying cause of chronic skin conditions. Processed sugar breaks down the collagen proteins that form smooth, youthful skin. Included in WINGO cream Salicylic acid and Sodium Hyaluronate work on deepest skin levels to unclog pores, remove inflammation and improve skin texture.",
      "Avoiding fast food isn’t only good for your weight and heart health; it's also a crucial component of a healthy skincare regimen.  Processed sugar is one of the main culprits when it comes to showing signs of age—it’s a good thing you largely avoid it!",
    ],
  },
  {
    //third
    question: "How often do you wash your face?",
    answers: ["Less than once a day", "Once a day", "More than once a day"],
    id: 3,
    finalAns: "",
    resualtsAnswers: [
      "Well-cleansed skin is healthier and more nourished: wash your face once in the morning to remove the oil your skin accumulated during the night, and once in the evening to get rid of bacteria and germs that stuck to your skin throughout the day. Apply WINGO moisturizer every time after washing to prevent dryness, irritation and to form a protective layer from polluted environment.",
      "Well-cleansed skin is healthier and more nourished: wash your face once in the morning to remove the oil your skin accumulated during the night, and once in the evening to get rid of bacteria and germs that stuck to your skin throughout the day. Apply WINGO moisturizer every time after washing to prevent dryness, irritation and to form a protective layer from polluted environment",
      "Perfect: Washing your face twice a day is just enough to remove oil and bacteria and not too much as to hinder your skin’s elasticity.",
    ],
  },
  {
    //fours
    question: "How often do you shave?",
    answers: ["Every day", "Every few days", "Rarely"],
    id: 4,
    finalAns: "",
    resualtsAnswers: [
      "Nicks, shave burns, skin irritation and scarring are all possible negative results of shaving, and the more often you shave, the more likely they are to happen. WINGO dermatologists added Licorice Extract as an ingredient due to it’s antioxidant effect and ability to get rid of shaving side effects.",
      "Regardless of how often you shave, make sure you do it when your skin is soft—for example, after you shower—and with a high-quality razor you replace often. WINGO dermatologists added Licorice Extract as an ingredient due to it’s antioxidant effect and ability to get rid of shaving side effects.",
      "Regardless of how often you shave, make sure you do it when your skin is soft—for example, after you shower—and with a high-quality razor you replace often. WINGO dermatologists added Licorice Extract as an ingredient due to it’s antioxidant effect and ability to get rid of shaving side effects.",
    ],
  },
  {
    //fives
    question: "How many hours of sleep do you get a night?",
    answers: ["Less than 6 hours", "6 to 8 hours", "More than 8 hours"],
    id: 5,
    finalAns: "",
    resualtsAnswers: [
      "A minimum of 6 hours of sleep a night is needed to produce enough collagen to maintain your skin's elasticity. Plus, those sleeping hours ensure you aren't walking around with tired, darkened circles under your eyes. Bright and fresh look is one of the key conditions of a really good day and WINGO face cream will surely help you to remove any signs of fatigue!",
      "6 to 8 hours - Getting adequate sleep is one of the most important things you can do for your body, including your skin. Bright and fresh look is one of the key conditions of a really good day and WINGO face cream will surely help you to remove any signs of fatigue!",
      "More than 8 hours - Getting adequate sleep is one of the most important things you can do for your body, including your skin.",
    ],
  },
  {
    //six
    question: "How many glasses of water do you drink a day?",
    answers: ["Less than 4 glasses", "4-6 glasses", "More than 6 glasses"],
    id: 6,
    finalAns: "",
    resualtsAnswers: [
      "When it comes to your skin, you should hydrate from within and without—which means drinking at least 8 cups of water a day. Hydrated skin is more supple, soft and elastic, and less prone to wrinkling. With WINGO moisturizer you can be sure that your skin is fully protected from dryness from the outside.",
      "When it comes to your skin, you should hydrate from within and without—which means drinking at least 8 cups of water a day. Hydrated skin is more supple, soft and elastic, and less prone to wrinkling. With WINGO moisturizer you can be sure that your skin is fully protected from dryness from the outside.",
      "The best way to keep your skin hydrated and healthy is to drink enough water every day!",
    ],
  },
  {
    //seven
    question: "Is your skin showing pigmentation or dark spots?",
    answers: ["Yes", "No"],
    id: 7,
    finalAns: "",
    resualtsAnswers: [
      "Dark spots naturally become more prominent and darker as we age, but overexposure to the sun can make them even worse. That’s because the sun’s ultraviolet rays encourage production of melanin, the pigment that underlies these spots. So, having good protection from the sun can make all the difference between clear and spotted skin. WINGO men face moisturizer will become your solution for fighting already existing pigmentations and prevent you from new ones.",
      "Lucky you! Prevention is the best treatment when it comes to dark spots: avoid overexposure to sunlight, and if you have to be outside, keep your body protected with sunscreen, long-sleeved shirts and wide-brimmed hats.",
    ],
  },
  {
    //eight
    question: "Are you suffering from eye bags or dark circles?",
    answers: ["Yes", "No"],
    id: 8,
    finalAns: "",
    resualtsAnswers: [
      "Eye bags are a natural result of the weakening muscles around the eye, which leads to the accumulation of fat or fluid under it. Dark circles appear as the result of excessive melanin production. Both of these problems can be eliminated with niacinamide which is the active ingredient of WINGO face moisturizer.",
      "You must be doing something right.",
    ],
  },
  {
    //nine
    question: "Do you notice any new wrinkles appearance?",
    answers: ["Yes", "No"],
    id: 9,
    finalAns: "",
    resualtsAnswers: [
      "Frown lines, wrinkles, crow’s feet, crinkles and lines—we all develop them eventually because collagen production slows down as we age, and with it the elasticity of our skin.  Ceramides in WINGO cream restores protective skin barrier, fills the intercellular space and by these repair wrinkles and help you to avoid their appearance.",
      "Your genetics, lifestyle and skincare routine may all have kept those wrinkles away, at least for now. Whatever it is, keep doing what you're doing!",
    ],
  },
  {
    //ten
    question: "How much alcohol do you consume?",
    answers: [
      "More than 7 glasses a week",
      "4-7 glasses a week ",
      "Less than 4 glasses a week",
    ],
    id: 10,
    finalAns: "",
    resualtsAnswers: [
      "Frequent alcohol consumption in large amounts can dehydrate your skin, causing you to appear older than your years.",
      "Frequent alcohol consumption in large amounts can dehydrate your skin, causing you to appear older than your years.",
      "Alcohol consumption in moderation can be good for you, especially red wine which contains resveratrol, an anti-aging component found in grape skins..",
    ],
  },
];

let arrWithFons = [
  "images/1.jpg",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
  "images/8.png",
  "images/9.png",
  "images/10.png",
];
let arrWithAdptiveFons = [
  "/images/adptive/a1.png",
  "/images/adptive/a2.png",
  "/images/adptive/a3.png",
  "/images/adptive/a4.png",
  "/images/adptive/a5.png",
  "/images/adptive/a6.png",
  "/images/adptive/a7.png",
  "/images/adptive/a8.png",
  "/images/adptive/a9.png",
  "/images/adptive/a10.png",
];

const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");
const prevBtn = document.querySelector(".quiz-prev");
let areReady = document.querySelector(".resAreR");
let resultArr = [];
let qArr = [];
let choiceOfUserArr = [];
let checkRadio;
let score = 0;
let questionIndex = 0;
let startQuiz = document.querySelector(".start");
let containerForSeccses = document.querySelector('.passSeccsess');


//for show rez
let startPercent = 100;
let badAns = 0;
let midAns = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;
prevBtn.onclick = checkPrevAnswer;

function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  const headerTemplate = `<h2 class='title'>%title%</h2>`;
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );

  headerContainer.innerHTML = title;
  let answerNumber = 1;
  for (answerText of questions[questionIndex]["answers"]) {
    const questionTemplate = `<li>
			<label class='label'>
				<input value='%number%' type="radio" class="answer radio-box" name="answer" />
				<span class='varirki radio-style'></span>
        <span class='varirki'>%answer%</span>
			</label>
		</li>`;

    let answerHtml = questionTemplate
      .replace("%answer%", answerText)
      .replace("%number%", answerNumber);

    listContainer.innerHTML += answerHtml;
    answerNumber++;
  }
}

function showPrevQuestion() {
  if (questionIndex !== 0 && questionIndex !== questions.length - 1) {
    questionIndex--;
    clearPage();
    showQuestion();
  } else if (questionIndex == questions.length - 1) {
    questionIndex--;
    clearPage();
    showQuestion();
  }
}

function checkAnswer() {
  checkRadio = listContainer.querySelector('input[type="radio"]:checked');
  if (checkRadio.value == 1) {
    badAns++;
  } else if (checkRadio.value == 2) {
    midAns = midAns + testa(0, 1);
  }

  if (!checkRadio) {
    submitBtn.blur();
    return;
  }
  const userAnswer = parseInt(checkRadio.value);

  ////////////Условие добавления в массив////////////
  if (!qArr.includes(questions[questionIndex]["question"])) {
    choiceOfUserArr.push(questions[questionIndex]["answers"][userAnswer - 1]);
    resultArr.push(questions[questionIndex]["resualtsAnswers"][userAnswer - 1]);
    qArr.push(questions[questionIndex]["question"]);
  } else {
    choiceOfUserArr.splice(
      questionIndex,
      1,
      questions[questionIndex]["answers"][userAnswer - 1]
    );
    resultArr.splice(
      questionIndex,
      1,
      questions[questionIndex]["resualtsAnswers"][userAnswer - 1]
    );
  }

  if (questionIndex !== questions.length - 1) {
    questionIndex++;
    clearPage();
    showQuestion();
  } else {
    clearPage();
    questionIndex++;
    showTakeInfoUser();
  }
}

function checkPrevAnswer() {
  if (questionIndex !== 0) {
    clearPage();
    showPrevQuestion();
    wrup.style.display = "none";
  }
}

function testa(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function showResults() {
  let finalStep = document.querySelector('.rezult');
  let finStep = document.querySelector('.gradwrap');

  finStep.style.display = 'none';
  finalStep.style.display = 'flex';
 //outPutRezProc
  let proc = `<h3 class='posent'>Your skin score is ${yourSkinScore()} out of 100. There is a ${testa(90,100)}% probability that </br> WINGO Face Cream will improve your skin</h3>`;
  let prociki = document.querySelector('.up-rezult');
  prociki.innerHTML = proc;

  let recomend = [];

  //outPutRec
  let downPage = document.querySelector('.down');
 
  //Rec Section  
  const resualTemplate = `
        <div class="down-question">
          <div class="down-question-image">
            <div class="question-img"><img class='redImg' src="./images/forQuest.png" alt=""></div>
          </div>
          <div class="down-question-info">
            <div class="down-question-1">%quest%</div>
            <div class="down-question-2">Your Answer: %youAns%</div>
            <div class="down-question-3">Recomendation to you: </br> %yorRec%</div>
          </div>
        </div>
`;

  for (let j = 0; j < questions.length; j++) {
    recomend.push(
      resualTemplate
        .replace("%quest%", qArr[j])
        .replace("%youAns%", choiceOfUserArr[j])
        .replace("%yorRec%", resultArr[j])
    );
  }


  for (let i = 0; i < questions.length; i++) {
    downPage.innerHTML += recomend[i];
   
  }

  submitBtn.style.display = "none";
  containerForSeccses.style.display = 'none';
}
//
//
//////ProgressBar
let progress = document.getElementById("progress");
function fulfillPlus(e) {
  if (checkRadio) {
    progress.style.width =
      parseInt(progress.style.width) + parseInt(e.target.dataset.value) + "%";
  } else {
    progress.style.width = parseInt(progress.style.width);
  }

  if (progress.style.width == "100%") {
    button.removeEventListener("click", fulfillPlus);
    progress.style.opacity = "0";
    containerForSeccses.style.display = 'inline-block';
  }
}


function fulfillMinus(e) {
  if (checkRadio) {
    progress.style.width = parseInt(progress.style.width) - parseInt(e.target.dataset.value) + "%";
  } else {
    progress.style.width = parseInt(progress.style.width);
  }
  if (progress.style.width !== "100%") {
    progress.style.opacity = "1";
    containerForSeccses.style.display = 'none';
    button.addEventListener("click", fulfillPlus);
  } 
}

///+///
let button = document.querySelector(".btn");
button.addEventListener("click", fulfillPlus);
////-//////

prevBtn.addEventListener("click", fulfillMinus);

/////////////////Validation

let btn = document.querySelector(".btn");

// Показ поля ввода данных

let wrup = document.querySelector(".wrapper");
function showTakeInfoUser() {
  wrup.style.display = "block";
}
//////Scin Score/////////////////
function yourSkinScore() {
  startPercent = startPercent - badAns * 10 - midAns * 3;
  return startPercent;
}

//Проверка  Email and Number
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const NUMBER_REGEXP = /^(\+1[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{9}$/g;

function isEmailValid(value1) {
  return EMAIL_REGEXP.test(value1);
}

function isNumberValid(value2) {
  return NUMBER_REGEXP.test(value2);
}
function NewUserInfo(mail, numer) {
  return {
    mail: mail,
    phoneNumer: numer,
  };
}

function test() {
  let email = document.querySelector(".emailUser");
  let phone = document.querySelector(".phoneUser");
  if (!isEmailValid(email.value) || !isNumberValid(phone.value)) {
  
  } else {
    wrup.style.display = "none";
    showResults();
    prevBtn.style.display = "none";
    let userEmail = email.value;
    let userPhone = phone.value;
    let user = NewUserInfo(userEmail, userPhone);
    JSON.stringify(user);
  }
}

submitBtn.addEventListener("click", test);

////////////////////////Fons change///////////////

let fonQuiz = document.querySelector(".quiz");
let fonForQuest = 0;

submitBtn.addEventListener("click", showNextFon);

prevBtn.addEventListener("click", showPrevFon);

function showNextFon() {
  let screenWidth = window.screen.width;
  if (checkRadio && screenWidth >  802) {
    ++fonForQuest;
    fonQuiz.style.backgroundImage = `url('${arrWithFons[fonForQuest]}')`;
  } else if(checkRadio && screenWidth <  802) {
        fonForQuest++;
        fonQuiz.style.backgroundImage = `url('${arrWithAdptiveFons[fonForQuest]}')`;
  }
}

function showPrevFon() {
  let screenWidth = window.screen.width;
  if ((fonForQuest > 0 && screenWidth >  802)) {
    fonForQuest--;
    fonQuiz.style.backgroundImage = `url('${arrWithFons[fonForQuest]}')`;
  } else if(fonForQuest !==0 && screenWidth <  802){
    fonForQuest--;
    fonQuiz.style.backgroundImage = `url('${arrWithAdptiveFons[fonForQuest]}')`;
  }
}

function quizStart() {
  let open = document.querySelector(".firstPage");
  open.style.display = "none";
  let qviz = document.querySelector(".quiz");
  qviz.style.display = "block";
}

startQuiz.addEventListener("click", quizStart);



///////////////////////////First Question

function checkIsThisFirst(){
  let cheki = document.querySelector('.quiz-list'); 
  if(  questionIndex == 0){
    cheki.style.marginTop = '-80px';
  } else if(questionIndex != 0){
    cheki.style.marginTop = '0px';
  
  }
}


startQuiz.addEventListener('click', checkIsThisFirst);
prevBtn.addEventListener('click', checkIsThisFirst);
submitBtn.addEventListener('click', checkIsThisFirst);
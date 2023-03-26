let buttonMad = document.getElementById("buttonMad");
buttonMad.addEventListener("click", goMad);
let inputValues = [];
let vulgarList = [
  "fuck",
  "fuck you",
  "fuck off",
  "shit",
  "piss off",
  "dick head",
  "asshole",
  "son of a bitch",
  "bastard",
  "bitch",
  "damn",
  "cunt",
];

let myArray = {
  adjective: [
    "bright",
    "sweet",
    "brave",
    "cute",
    "funny",
    "sneaky",
    "stupid",
    "awesome",
  ],
  country: [
    "China",
    "Japan",
    "Canada",
    "Iceland",
    "Finland",
    "Ukraine",
    "France",
    "Denmark",
  ],

  adverb: [
    "abruptly",
    "blissfully",
    "carefully",
    "deliberately",
    "effortlessly",
    "frankly",
    "gently",
    "happily",
  ],

  animal: [
    "lion",
    "elephant",
    "kangaroo",
    "giraffe",
    "tiger",
    "gorilla",
    "sloth",
    "koala",
  ],
  verbIng: [
    "running",
    "laughing",
    "dancing",
    "cooking",
    "singing",
    "writing",
    "reading",
    "sleeping",
  ],
  verb: [
    "jump",
    "climb",
    "whisper",
    "explore",
    "build",
    "play",
    "drive",
    "listen",
  ],
  liquid: [
    "beer",
    "oil",
    "milk",
    "coffee",
    "gasoline",
    "tea",
    "wine",
    "lemonade",
  ],
  partOfbody: [
    "ear",
    "nose",
    "toe",
    "mouth",
    "eye",
    "eyelash",
    "thumb",
    "earlobe",
  ],
  place: [
    "theatre",
    "cinema",
    "cafe",
    "library",
    "supermarket",
    "zoo",
    "gym",
    "bakery",
  ],
};

function goMad(event) {
  event.preventDefault();

  let inputElements = document.getElementsByTagName("input");
  for (var i = 0; i < inputElements.length; i++) {
    let currentInput = inputElements[i];
    let elementValue = currentInput.value;

    if (elementValue) {
      for (var j = 0; j < vulgarList.length; j++) {
        if (elementValue.toLowerCase() == vulgarList[j]) {
          currentInput.value = "";

          currentInput.setAttribute("placeholder", "No vulgar!");
          break;
        }
      }
      inputValues.push(elementValue);
    } else {
      inputElements[i].setAttribute("placeholder", "Word!");
    }
  }
  showStory(inputValues);
}

function showStory(values) {
  let secondaryWrapper = document.getElementById("secondaryWrapper");
  secondaryWrapper.innerHTML = "";

  let newParagraph = document.createElement("p");
  let n = newParagraph.style;

  newParagraph.innerHTML =
    "If you are travelling in <span>country</span> and find yourself having to cross a piranha-filled river, here`s how to do it <span>adverb</span>. Piranhas are more <span>adjective</span> during the day, so cross the river at night. Avoid areas with netted <span>animal</span> traps-piranhas may be <span>verbIng</span> there looking to <span>verb</span> them. When <span>verbIng</span> the river, swim <span>adverb</span>, you don`t want to wake them up and make them <span>adjective</span>. Whatever you do, if you have an open wound, try to find another way to get to the <span>place</span>. Piranhas are attracted to fresh <span>liquid</span> and will most likely take a bite out of your <span>partOfbody</span> if you <span>verb</span> in the water!";

  newParagraph.setAttribute(
    "style",
    "font-size: 1.5rem; background-color: white; text-align: justify; padding: 2rem; color: rgb(70, 108, 131); border-radius: 1rem;"
  );
  n.media = "(max-width:642px)";
  n.fontSize = "1rem";
  secondaryWrapper.appendChild(newParagraph);

  let spanInput = newParagraph.querySelectorAll("span");
  spanInput.forEach((span) => {
    span.style.color = "rgb(211, 149, 60)";
  });

  for (var i = 0; i < spanInput.length; i++) {
    spanInput[i].innerHTML = values[i];
  }

  let goMadAgainButton = document.createElement("button");
  goMadAgainButton.innerHTML = "GO MAD AGAIN!";
  let h = goMadAgainButton.style;
  h.fontFamily = "Open Sans";
  h.display = "block";
  h.margin = "2rem auto 0 auto";
  h.borderRadius = "0.7rem";
  h.backgroundColor = "rgb(70, 108, 131)";
  h.transition = "all 0.2s ease-in-out";
  h.fontSize = "1.5rem";
  h.fontWeight = "750";
  h.color = "white";
  h.borderStyle = "none";
  h.padding = "0.9rem 1.9rem";
  goMadAgainButton.addEventListener("mouseenter", () => {
    h.backgroundColor = "rgb(211, 149, 60)";
  });
  goMadAgainButton.addEventListener("mouseleave", () => {
    h.backgroundColor = "rgb(70, 108, 131)";
  });
  secondaryWrapper.appendChild(goMadAgainButton);
}

for (let i = 1; i < 14; i++) {
  let x = document.getElementById(`button${i}`);
  let y = showRandom(i);

  x.addEventListener("click", y);
}

function showRandom(i) {
  let input = document.getElementById(i);
  return function (event) {
    event.preventDefault();
    let z = input.classList.toString();

    input.value = myArray[z][Math.floor(Math.random() * myArray[z].length)];
  };
}

let buttonRandom = document.getElementById("buttonRandom");
buttonRandom.addEventListener("click", showRandomAll);

function showRandomAll(event) {
  event.preventDefault();

  for (let i = 1; i < 14; i++) {
    showRandom(i)(event);
  }
}

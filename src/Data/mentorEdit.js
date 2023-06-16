const fs = require("fs");
const { stringify } = require("querystring");
let gameDataJSON = fs.readFileSync("mentorData.json");

const gameMode = ["Pubs", "Comp", "Ranked", "General Gameplay"];
const skillLevel = ["Bronze", "Silver", "Gold", "Diamond+"];
const characters = ["Assault", "Recon", "Support", "Skirmisher", "Controller"];

let data = JSON.parse(gameDataJSON);
data.forEach((element) => {
  const startIndex = Math.floor(Math.random() * characters.length);
  const numElements =
    Math.floor(Math.random() * (characters.length - startIndex)) + 1;
  const characterSet = characters.slice(startIndex, startIndex + numElements);

  const skillStartIndex = Math.floor(Math.random() * skillLevel.length);
  const skillNumElements =
    Math.floor(Math.random() * (skillLevel.length - skillStartIndex)) + 1;
  const skillLevelSet = skillLevel.slice(0, skillStartIndex+1);

  const modeStartIndex = Math.floor(Math.random() * gameMode.length);
  const modeNumElements =
    Math.floor(Math.random() * (gameMode.length - modeStartIndex)) + 1;
  const modeLevelSet = gameMode.slice(
    modeStartIndex,
    modeStartIndex + modeNumElements
  );

  element.characters = characterSet;
  element.skillLevel = skillLevelSet;
  element.mode = modeLevelSet;

  console.log(element);
});

let dataJSON = JSON.stringify(data);
fs.writeFileSync("mentorData.json", dataJSON);

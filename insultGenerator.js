// insultGenerator.js
const part1 = [
  "Silly",
  "Lazy",
  "Clumsy",
  "Whimsical",
  "Obnoxious",
  "Ridiculous",
  "Absurd",
  "Idiotic",
  "Insufferable",
  "Worthless"
];

const part2 = [
  "donut",
  "llama",
  "potato",
  "gnome",
  "buffoon",
  "nincompoop",
  "fool",
  "jerk",
  "moron",
  "dunce"
];

const part3 = [
  "dancing in the rain.",
  "eating a sandwich.",
  "looking for its shoes.",
  "singing out of tune.",
  "barking up the wrong tree.",
  "buttering toast.",
  "playing with fire.",
  "chasing its own tail.",
  "spinning in circles.",
  "building castles in the air."
];

function generateInsult() {
  let index1 = Math.floor(Math.random() * part1.length);
  let index2 = Math.floor(Math.random() * part2.length);
  let index3 = Math.floor(Math.random() * part3.length);
  return `${part1[index1]} ${part2[index2]}, ${part3[index3]}`; // Return the insult
};

document.getElementById('generateInsult').addEventListener('click', function() {
  const insult = generateInsult();
  document.getElementById('insult').textContent = insult;
  document.getElementById('insultDisplay').classList.remove('hidden'); // Show the insult text
});

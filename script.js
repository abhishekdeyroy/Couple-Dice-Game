const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const spinButton = document.getElementById('spinButton');
const defaultWord1 = 'Love'; // Change the default word in box 1
const defaultWord2 = 'Romance'; // Change the default word in box 2

box1.textContent = defaultWord1;
box2.textContent = defaultWord2;

const wordsList1 = ['Lick', 'Suck', 'Kiss', 'Bite', 'Tickle','Massage','Touch','Your Choice'];
const wordsList2 = ['Nipple', 'Pussy', 'Lips', 'Thighs', 'Neck' ,'Ear','Hand','Belly Button','Nose','Back','Feet','Your Choice'];

let spinning = false;

function revealWord(box, wordList) {
  let currentIndex = 0;
  const revealInterval = setInterval(() => {
    box.textContent = wordList[currentIndex];
    currentIndex = (currentIndex + 1) % wordList.length;
  }, 100);

  return revealInterval;
}

spinButton.addEventListener('click', () => {
  if (!spinning) {
    const diceRollSound = document.getElementById('diceRollSound');
    diceRollSound.currentTime = 0; // Reset audio to the beginning
    diceRollSound.play();
    spinning = true;
    spinButton.disabled = true;

    let spins = 0;
    const maxSpins = 20;
    let interval1, interval2;

    interval1 = revealWord(box1, wordsList1);
    interval2 = revealWord(box2, wordsList2);

    setTimeout(() => {
      clearInterval(interval1);
      clearInterval(interval2);
      box1.textContent = wordsList1[Math.floor(Math.random() * wordsList1.length)];
      box2.textContent = wordsList2[Math.floor(Math.random() * wordsList2.length)];
      spinButton.disabled = false;
      spinning = false;
    }, maxSpins * 100);
  }
});

import {ELEMENT_IDS, KONAMI_CODE} from "./constants";

// as a massive fan of Nightmare Before Christmas (which technically is a Disney property!), and because the holidays are
// approaching, I wanted to show Jack Skellington and Zero flying across the sky delivering presents as an Easter Egg.
// to show this, input the Nintendo Contra code into the keyboard to show the animation:
// Up Up Down Down Left Right Left Right B A
export default function setupDisneyMagic() {
  let userInputSequence = [];
  
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    userInputSequence.push(key);
    
    // keep the array length the same as the Konami Code
    if (userInputSequence.length > KONAMI_CODE.length) {
      userInputSequence.shift();
    }
    
    // trigger Disney Magic if the Konami Code is entered, and reset the sequence
    if (userInputSequence.join(',') === KONAMI_CODE.join(',')) {
      animateSleigh();
      userInputSequence = [];
    }
  });
}

function animateSleigh() {
  const sleigh = document.getElementById(ELEMENT_IDS.ZERO_SLEIGH);
  if (!sleigh) {
    console.error('Sleigh element not found!');
    return;
  }
  
  // start animation, with 5 seconds to complete, and the linear keyword for a constant speed
  sleigh.style.display = 'block';
  sleigh.style.animation = 'scrollSleigh 5s linear';
  
  // end animation
  sleigh.addEventListener('animationend', () => {
    sleigh.style.display = 'none';
    sleigh.style.animation = '';
  });
}
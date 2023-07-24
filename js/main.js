const textElement = document.querySelector('.anim-text');
const text = 'Designer';
let charIndex = 0;
let isAnimating = true;

function typeText() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    textElement.classList.remove('caret-hidden'); 
    setTimeout(typeText, 100);
  } else {
    isAnimating = false;
    textElement.classList.add('caret-hidden'); 
    setTimeout(reverseText, 4000);
  }
}

function reverseText() {
  if (textElement.textContent.length > 0) {
    textElement.textContent = textElement.textContent.slice(0, -1);
    setTimeout(reverseText, 100);
  } else {
    isAnimating = true;
    charIndex = 0;
    textElement.classList.remove('caret-hidden'); 
    setTimeout(typeText, 500); 
  }
}

function blinkCaret() {
  textElement.classList.toggle('caret-hidden');
  setTimeout(blinkCaret, 500);
}

function animateText() {
  typeText();
  blinkCaret();
}

animateText();

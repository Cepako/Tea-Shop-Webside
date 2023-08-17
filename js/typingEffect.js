const citations = {
  quotes: [
    `"If you are cold, tea will warm you. If you are hot, tea will cool you down. If you are energized, tea will calm you down."`,
    `"Tea revives our imagination, holds up his languid head and allows you to keep your soul at peace.”`,
    `"There is no problem so serious that which could not be soothed by a good cup of tea.”`,
    `“We had a kettle that started leaking, we didn't fix it, the leak got bigger. Haven't had tea in a week? The world has collapsed."`,
    `"Tea should be drunk slowly, respectfully, as if it were the axis around which the world revolves, evenly, without rushing towards the future."`,
  ],
  author: [
    'William Gladstone',
    'Edmund Waller',
    'Bernard-Paul Heroux',
    'Rudyard Kipling',
    'Thich Nat Hahn',
  ],
};
const text = document.querySelector('.quotes h2');
const author = document.querySelector('.quotes p');
let activeLetter = -50;
let activeText = 0;
addLetter();
function addLetter() {
  if (activeLetter >= 0) {
    text.textContent += citations.quotes[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === citations.quotes[activeText].length) {
    author.textContent = citations.author[activeText];
    activeText++;

    if (activeText === citations.quotes.length) {
      activeText = 0;
    }
    return setTimeout(() => {
      activeLetter = -15;
      text.textContent = '';
      author.textContent = '';
      addLetter();
    }, 5000);
  }
  setTimeout(addLetter, 40);
}

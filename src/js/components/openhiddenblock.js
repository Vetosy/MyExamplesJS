const blockBtn = document.querySelector('.block__btn')
const blockContent = document.querySelector('.block__content')

const blockBtnClick = blockBtn.addEventListener('click', () => {
  const isHidden = blockContent.classList.toggle('block-hidden');
  const buttonText = isHidden ? 'Open block' : 'Close block';
  blockBtn.textContent = buttonText;
  blockBtn.setAttribute('aria-label', buttonText);
});
